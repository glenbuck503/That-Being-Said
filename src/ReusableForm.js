import React, { useState } from "react";
import PropTypes from "prop-types";

import Select from 'react-select';





function ReusableForm(props) {
  const [ word, setWord ] = useState("")
  const [ translatedWord, setTranslatedWord ] = useState("")
  const [ lang, setLang ] = useState("")
  const [ translatedLang, setTranslatedLang ] = useState("")


  const onSubmit = () => {

    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.REACT_APP_API_KEY}&text=${word}&lang=${lang}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          setTranslatedWord( "Translation: " + jsonifiedResponse.text[0]);
          setTranslatedLang(jsonifiedResponse.text);



        })
      .catch((error) => {
      
      });
      
  }


  const handleChange = (event) => {
    setWord(event.target.value)
  }

  const handleChangeLang = (event) => {
    setLang(event.target.value)
  }


  return (
    <React.Fragment>
      <div className="nav">
      <button onClick={onSubmit} >Login</button>
      <button onClick={onSubmit} >Contact</button>
      <button onClick={onSubmit} >Links</button>
      <button onClick={onSubmit} >Dictionary</button>
      </div>
        <div className="first">
        
          <input 
            onChange={handleChange}
            
            type='text'
            name='words'
            placeholder='Word(s) to translate' />
      
            
            <input
            onChange={handleChangeLang}
            
            type='text'
            name='words'
            placeholder='language code' />
        </div>

     
        <button onClick={onSubmit} >TRANSLATE</button>
        {/* <select id = "dropdown">
    <option value="N/A">N/A</option>
    <option value="es">Spanish</option>
    <option value="ru">Russian</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>  */}
        <p className="result">{translatedWord}</p>

        {/* <p className="trade">Glen Buck 2021 &#8482;</p> */}
   


   
 
    </React.Fragment>
  );
 
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;


//adding firebase to project