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

  const AboutMe = () =>
  
  <div className="glenAboutMe">
    <p className="aboutP">I was born and raised in Portland, OR. I have spent the last 12 years in Client Relations and Office Managememt for a Tax Sertvices Inc, which is a local Tax Firm here in the Portland area. I decided to make a career switch about a year ago as I have been wanting to get into the development field for quite some time. I am excited to see where it takes me.

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    ABOUT THIS APP:
    <br/>
    <br/>
    A while back, a friend of mine pointed out that I say "With that being said" a lot. I was very confused and told him "no I dont!". Sure enough the very next day I caught myself saying it all the time. So I decided to make a translator app and call it "That Being Said". This is still a work in progress as I will be adding a definition function and a text to speech function later. </p>
    <ul>
    <img className="glen" src={glenImage} id="portPic" />
    <li className="pGlen"> <a href= {"https://www.linkedin.com/in/glen-buck/"}>LinkedIn</a></li>
    <li className="pGlen"> <a href= {"https://github.com/glenbuck503"}>GitHub</a></li>
    <li className="pGlen"> <a href = "mailto: glenbuck@gamil.com">Email</a></li>
</ul>


  </div>;
  


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

  


  
  

  return (
    <React.Fragment>
      <div className="nav">
        <button onClick={onReload} >Home</button>
        <button onClick={onSubmit} >Links</button>
        <button onClick={onClick}>About</button>
        {showAbout ? <AboutMe /> : null }
        
      </div>
      <div className="first">
      <div className="testInput">
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
        </div>
        <div className="fullResult">
        <button onClick={onSubmit} >TRANSLATE</button>

        <p className="result">{translatedWord}</p>
        </div>


      
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