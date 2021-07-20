import * as c from './../actions/ActionTypes';

// let initialState = {
//   isLoading: false,
//   words: [],
//   error: null
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case c.REQUEST_WORDS:
//       return Object.assign({}, state, {
//         isLoading: true
//       });
//     case c.GET_WORDS_SUCCESS:
//       return Object.assign({}, state, {
//         isLoading: false,
//         words: action.text
//       });
//     case c.GET_WORDS_FAILURE:
//       return Object.assign({}, state, {
//         isLoading: false,
//         error: action.error
//       });
//     default:
//       return state;
//     }
// };

export default (state = {}, action) => {
  const { words, id } = action;
  switch (action.type) {
  case c.GET_WORDS_SUCCESS:
    console.log(words)
    return Object.assign({}, state, {
      [id]: {
        words: words,
  
        id: id
      }
    });
  case c.GET_WORDS_FAILURE:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};


