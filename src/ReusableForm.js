import React, { useState } from "react";
import PropTypes from "prop-types";
import Word from "./Words"


function ReusableForm(props) {
  const [ word, setWord ] = useState("")
  const [ translatedWord, setTranslatedWord ] = useState("")

  const onSubmit = () => {

    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.REACT_APP_API_KEY}&text=${word}&lang=en-es`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          setTranslatedWord(jsonifiedResponse.text[0]);

        })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleChange = (event) => {
    setWord(event.target.value)
  }
  return (
    <React.Fragment>

   
        
        <input
          onChange={handleChange}
          type='text'
          name='words'
          placeholder='Translate' />
        <button onClick={onSubmit} >TRANSLATE{props.buttonText}</button>
        <p>{translatedWord}</p>
 
    </React.Fragment>
  );
 
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;
