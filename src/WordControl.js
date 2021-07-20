
import React from 'react';
import NewWord from './NewWord';
import WordList from './WordList';
import WordDetail from './WordDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class WordControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      selectedWord: null,
      editing: false

    };

  }
}