import {
  GET_ARTICLES,
  GET_ARTICLES_BY_ID,
  SET_ERROR,
  SET_LOADING,
} from "../constants/action-types";

const initialState = {
  articles: [],
  articlesById: [],
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
  if (action.type === GET_ARTICLES_BY_ID) {
    console.log(state.articles.filter(article => article.userId === action.payload))
    return Object.assign({}, state, {
      articlesById: state.articles.filter(article => article.userId === action.payload),
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
