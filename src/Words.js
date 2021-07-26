import React from 'react';

import PropTypes from "prop-types";
import { connect } from 'react-redux';

// import { makeApiCall } from './actions';
import { makeApiCall } from './actions/index.js';

class Words extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {

  //   const { dispatch } = this.props;
  //   dispatch(makeApiCall());
  // }

  render() {
    const { error, isLoading, words } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
       <ul>

          </ul>
          {/* <h3>{words.text}</h3> */}
         
        </React.Fragment>
      );
    }
  }
}

Words.propTypes = {
  masterWordList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
  };
const mapStateToProps = state => {
  return {
    words: state.words,
    isLoading: state.isLoading,
    error: state.error
  }
}
export default connect(mapStateToProps)(Words);

