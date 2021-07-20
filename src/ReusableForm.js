import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) {
  return (
    <React.Fragment>

      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='words'
          placeholder='Translate' />
        <button type='submit'>TRANSLATE{props.buttonText}</button>
    
      </form>
     
      
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string

};

export default ReusableForm;