import * as c from './ActionTypes';

export const requestHeadlines = () => ({
  type: c.REQUEST_HEADLINES,
  
  

});

export const getHeadlinesSuccess = (text) => ({
  type: c.GET_HEADLINES_SUCCESS,
text
});

export const getHeadlinesFailure = (error) => ({
  type: c.GET_HEADLINES_FAILURE,
  error
});

export let makeApiCall = () => {
 
  return dispatch => {

    dispatch(requestHeadlines);

    let result = "hello";
    let result2 = "bye"
  
    return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.REACT_APP_API_KEY}&text=${result}&lang=en-es`)
    
    
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getHeadlinesSuccess(jsonifiedResponse.text));
        })
      .catch((error) => {
        dispatch(getHeadlinesFailure(error));
      });
      
    
  }

}

