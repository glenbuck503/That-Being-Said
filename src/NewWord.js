import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewWord(props){
const words = {};
words.id = v4();

function handleNewWordSubmission(event) {
  event.preventDefault();
  props.onNewWordCreation({
    words: event.target.words.value, 
    id: v4()
  });
}
return (

    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewWordSubmission}
        // buttonText="Translate Words!" />
          />

 
    </React.Fragment>
  );
  }

  NewWord.propTypes = {
    onNewWordCreation: PropTypes.func,
    formSubmissionHandler: PropTypes.func
  };
  
  export default NewWord;