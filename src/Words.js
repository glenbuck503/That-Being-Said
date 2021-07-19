import React from 'react';


import { connect } from 'react-redux';

import { makeApiCall } from './actions';

class Words extends React.Component {
  constructor(props) {
    super(props);

  }



  componentDidMount() {

    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, words } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
      
          {/* <ul>
            {words.map((word, index) =>
              <li key={index}>
          
          
              </li>
            )}
          </ul> */}
          <h3>{words}</h3>
        </React.Fragment>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    words: state.words,
    isLoading: state.isLoading,
    error: state.error
  }
}
export default connect(mapStateToProps)(Words);