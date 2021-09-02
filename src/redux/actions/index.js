import axios from "axios";
import {
  GET_ARTICLES,
  GET_ARTICLES_BY_ID,
  SET_ERROR,
  SET_LOADING,
} from "../constants/action-types";

export function getArticles() {
  return function (dispatch) {
    dispatch({ type: SET_LOADING, payload: true });
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: GET_ARTICLES, payload: response.data });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: SET_ERROR, payload: err.message });
      });
  };
}

export function getArticlesById(userId) {
  return function (dispatch) {
    // TODO: Without making a new API call, return only the articles that match the user id provided.
    dispatch({ type: GET_ARTICLES_BY_ID, payload: userId});
  };
}
