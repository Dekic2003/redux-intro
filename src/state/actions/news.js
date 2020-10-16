import axios from "axios";
import { ACTIONS } from "../actions";

export const fetchNews = () => (dispatch) => {
  dispatch({ type: ACTIONS.NEWS_FETCH_START, payload: "" });
  axios({
    method: "GET",
    url: "http://newsapi.org/v2/top-headlines?country=us",
    headers: {
      "X-Api-Key": "15cf2f1b37eb402db1b4aa1dfcd01e6a",
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: ACTIONS.NEWS_FETCH_SUCESS, payload: res.data.articles });
    })
    .catch((err) => {
      dispatch({ type: ACTIONS.NEWS_FETCH_ERROR, payload: err });
      console.log(err);
    });
};
