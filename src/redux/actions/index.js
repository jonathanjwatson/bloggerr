import axios from "axios";
import { GET_ARTICLES } from "../constants/action-types";

export function getArticles() {
  return function (dispatch) {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: GET_ARTICLES, payload: response.data });
      });
  };
}
