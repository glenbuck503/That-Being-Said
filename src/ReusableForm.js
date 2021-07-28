import React, { useState } from "react";
import PropTypes from "prop-types";
import wordsAudio from "./img/hello_world.mp3";
import glenImage from "./img/glen2.jpg";

function ReusableForm(props) {
  const [ word, setWord ] = useState("")
  const [ translatedWord, setTranslatedWord ] = useState("")
  const [ lang, setLang ] = useState("")
  const [ translatedLang, setTranslatedLang ] = useState("")

  const [showAbout, setShowAbout] = useState(false);
  const onClick = () => setShowAbout(true);



  const onReload = e => {
    e.preventDefault()
    window.location.reload()
  }

  // const onAboutMe = e => {
  //   e.preventDefault()
  //   window.location.reload()

  // }
  const onSubmit = () => {

    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.REACT_APP_API_KEY}&text=${word}&lang=${lang}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
        setTranslatedWord( "Translation: " + jsonifiedResponse.text); 
        setTranslatedLang(jsonifiedResponse.text)
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

  
  // const AboutMe = e => {
  //   e.preventDefault()
  //   window.location.reload()
  // }

  const AboutMe = () =>
  <div>
    <img className="glen" src={glenImage} id="portPic" />
    <p>test test test test</p>
    <p>test test test test</p>

  </div>;
  

  return (
    <React.Fragment>
      <div className="first">
        <div className="nav">
        <button onClick={onReload} >Home</button>
        <button onClick={onSubmit} >Contact</button>
        <button onClick={onSubmit} >Links</button>
        
        <button onClick={onClick}>About</button>
        {showAbout ? <AboutMe /> : null}
      </div>
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

      {/* <div className="aboutMe">
        <img className="glen" src={glenImage} id="portPic" />
      </div> */}
      
    </React.Fragment>
  );

}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};


export default ReusableForm;





  // const [ wordDef, setWordDef ] = useState("")
  // const [ translatedWordDef, setTranslatedWordDef ] = useState("")
  // const [ audio, setAudio ] = useState({wordsAudio})


 {/* <button onClick={onSubmit2}> Def</button> */}


        {/* <p className="result2">{lang}<audio  src={wordsAudio} controls/></p> */}
        {/* <audio  src={wordsAudio} controls autoPlay/>
       
        <audio  src={wordsAudio} controls/> */}

        {/* <p className="trade">Glen Buck 2021 &#8482;</p> */}


     // const onSubmit2 = () => {
  //   setAudio({wordsAudio})
  // }

  // const handleChangeDef = (event) => {
  //   setAudio( <audio  src={wordsAudio} controls autoPlay/>);
  // }