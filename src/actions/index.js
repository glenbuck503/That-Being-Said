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


export const getWordsSuccess2 = (word) => {
  const { words, id } = word;
  return {
    type: c.GET_WORDS_SUCCESS,
    words: words,
 
    id: id
  }


  
}
export let makeApiCall = () => {
 
  return dispatch => {

    dispatch(requestWords);

    let result = "hello old friend";
    // const result = event.target.words.value

  
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

