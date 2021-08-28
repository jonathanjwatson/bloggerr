import { GET_ARTICLES } from "../constants/action-types";

const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ARTICLES) {
    // console.log(action.payload);
    return Object.assign({}, state, { articles: action.payload });
  }
  return state;
}

export default rootReducer;
