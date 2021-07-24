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
        <div className="first">
        <input 
          onChange={handleChange}
          
          type='text'
          name='words'
          placeholder='Word(s) to translate' />
          </div>
          <input
          onChange={handleChangeLang}
          
          type='text'
          name='words'
          placeholder='language code' />

          
        <button onClick={onSubmit} >TRANSLATE</button>
        <p>{translatedWord}</p>
        <p>{translatedLang}</p>


   
 
    </React.Fragment>
  );
 
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;
