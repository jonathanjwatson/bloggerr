import {
  GET_ARTICLES,
  SET_ERROR,
  SET_LOADING,
} from "../constants/action-types";

const initialState = {
  articles: [],
  error: "",
  loading: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ARTICLES) {
    // console.log(action.payload);
    return Object.assign({}, state, {
      articles: action.payload,
      loading: false,
    });
  }
  if (action.type === SET_ERROR) {
    return Object.assign({}, state, { error: action.payload });
  }
  if (action.type === SET_LOADING) {
    return Object.assign({}, state, { loading: action.payload });
  }
  return state;
}

export default rootReducer;
