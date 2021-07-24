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
          setTranslatedWord(jsonifiedResponse.text[0]);



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
        
        <input
          onChange={handleChange}
          
          type='text'
          name='words'
          placeholder='Translate' />
          <input
          onChange={handleChangeLang}/>
          
          <select value={handleChange}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select> 

          

          
        <button onClick={onSubmit} >TRANSLATE</button>
        <p>{translatedWord}</p>


   
 
    </React.Fragment>
  );
 
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;
