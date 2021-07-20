import * as c from './ActionTypes';

export const requestWords = () => ({
  type: c.REQUEST_WORDS,
  
  

});

export const getWordsSuccess = (text) => ({
  type: c.GET_WORDS_SUCCESS,
text
});

export const getWordsFailure = (error) => ({
  type: c.GET_WORDS_FAILURE,
  error
});

export let makeApiCall = () => {
 
  return dispatch => {

    dispatch(requestWords);

    let result = "hello old friend";
    
  
    return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.REACT_APP_API_KEY}&text=${result}&lang=en-es`)
    
    
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getWordsSuccess(jsonifiedResponse.text));
        })
      .catch((error) => {
        dispatch(getWordsFailure(error));
      });
      
    
  }

}

