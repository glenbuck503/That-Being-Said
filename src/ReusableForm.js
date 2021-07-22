import React, { useState } from "react";
import PropTypes from "prop-types";


function ReusableForm(props) {
  const [ word, setWord ] = useState("")

  const onSubmit = () => {
    console.log(word)
  }
  const handleChange = (event) => {
    setWord(event.target.value)
  }
  return (
    <React.Fragment>

      {/* <form onSubmit={props.formSubmissionHandler}> */}
        
        <input
          onChange={handleChange}
          type='text'
          name='words'
          placeholder='Translate' />
        <button onClick={onSubmit} >TRANSLATE{props.buttonText}</button>
  
    
      {/* </form> */}
     
      
    </React.Fragment>

  );
  
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string

};

export default ReusableForm;