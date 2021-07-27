import React, { useState } from "react";
import PropTypes from "prop-types";







function ReusableForm(props) {
  const [ word, setWord ] = useState("")
  const [ translatedWord, setTranslatedWord ] = useState("")
  const [ lang, setLang ] = useState("")
  const [ translatedLang, setTranslatedLang ] = useState("")
  const [ wordDef, setWordDef ] = useState("")
  const [ translatedWordDef, setTranslatedWordDef ] = useState("")


  const onSubmit = () => {

    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.REACT_APP_API_KEY}&text=${word}&lang=${lang}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          setTranslatedWord( "Translation: " + jsonifiedResponse.text); //maybe put [0] back if running into errors
          setTranslatedLang(jsonifiedResponse.text);



        })
      .catch((error) => {
      
      });
      
  }

  const onSubmit2 = () => {

 
      
  }

//work in progress. trying to figure out second api
  const handleChange = (event) => {
    setWord(event.target.value)
  }

  const handleChangeLang = (event) => {
    setLang(event.target.value)
  }

  const handleChangeDef = (event) => {
    setWordDef(event.target.value)
  }


  return (
    <React.Fragment>
      <div className="nav">
      <button onClick={onSubmit} >Login</button>
      <button onClick={onSubmit} >Contact</button>
      <button onClick={onSubmit} >Links</button>
      <button onClick={onSubmit} >About</button>
      </div>
        <div className="first">
        
          <input 
            onChange={handleChange}
            
            type='text'
            name='words'
            placeholder='Word(s) to translate' />
      
            
          <select onChange={handleChangeLang}>
            <option value="list">Choose a Language</option>
            <option id="option1" value="en">English</option>
            <option value="es">Spanish</option>
            <option value="ru">Russian</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="vi">Vietnamese</option>
          </select>

   
        </div>

     
        <button onClick={onSubmit} >TRANSLATE</button>
   
        <p className="result">{translatedWord}</p>
       
     

        {/* <button onClick={onSubmit2} >Def</button> */}
        <p className="result2">{translatedWordDef}</p>

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