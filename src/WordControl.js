
import React from 'react';
import NewWord from './NewWord';
import WordList from './WordList';
import WordDetail from './WordDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './actions';

class WordControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      selectedWord: null,
      editing: false

    };

  }

  handleClick = () => {
    if (this.state.selectedWord != null) {
      this.setState({

        selectedWord: null,
        editing: false
 
      });
      
    } else {
      const { dispatch } = this.props;
      // const action = a.toggleForm();
      // dispatch(action);
    }
  }


   handleAddingNewWordToList = (newWord) => {

    const { dispatch } = this.props;
    const action = a.getWordsSuccess2(newWord);
    dispatch(action);
    // const action2 = a.toggleForm();
    // dispatch(action2);
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 


if (this.state.selectedWord != null) {
      currentlyVisibleState = <WordDetail
        word = {this.state.selectedWord} 
        onClickingDelete = {this.handleDeletingWord}
  
      />
      buttonText = "Return to word list";
 
      
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewWord onNewWordCreation={this.handleAddingNewWordToList} />
      
      buttonText = "Return to word List"

    } else {
      
      currentlyVisibleState = <WordList wordList={this.props.masterWordList} onWordSelection={this.handleChangingSelectedWord}/>

      buttonText = "Add Word";
 
      
    }
    return (

      <React.Fragment>
      
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText} </button>
      </React.Fragment>
    );
  }

}




WordControl.propTypes = {
masterWordList: PropTypes.object,
formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
return {
  masterWordList: state.masterWordList,
  formVisibleOnPage: state.formVisibleOnPage,
  selectedWord: state.selectedWord
}
}
WordControl = connect(mapStateToProps)(WordControl);

export default WordControl;

