import React from 'react';
import Words from './Words';
import PropTypes from "prop-types";


function WordList(props){

  return (
    <React.Fragment>
      <hr />

      {Object.values(props.wordList).map((words) =>
        <Words
          whenWordClicked = { props.onWordSelection }
          words={words.names}
       
  
          id={words.id}
          key={words.id}/>
      )}

    </React.Fragment>
     
  );
}


WordList.propTypes = {
  wordList: PropTypes.object,
  onWordSelection: PropTypes.func
};


export default WordList;