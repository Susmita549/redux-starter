import axios from "axios";
import {
  GET_FEEDS_ERROR,
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS,
} from "./feed.type";

export const getFeedsApi = () => (dispatch) => {
  dispatch({ type: GET_FEEDS_LOADING });
  axios
    .get("http://localhost:8080/feeds")
    .then((r) => {
      // console.log(r)
      dispatch({ type: GET_FEEDS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_FEEDS_ERROR });
    });
};
