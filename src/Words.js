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
      
      <ul>
            {words.map((words, index) =>
              <li key={index}>
                <h3>{words.text}</h3>
              
              </li>
            )}
          </ul>
          <h3>{words}</h3>
          {/* <p>Powered By <a href="http://translate.yandex.com">Yandex.Translate</a></p> this line is still unclear to me. the documentation for this api says it requires you to have the powered by line but unsure*/} 
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