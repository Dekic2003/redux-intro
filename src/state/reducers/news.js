import { ACTIONS } from "../actions";

const initialState = {
  all: [],
  error: null,
  loading: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.NEWS_FETCH_START:
      return {
        ...initialState,
        loading: true,
      };
    case ACTIONS.NEWS_FETCH_SUCESS:
      return {
        ...initialState,
        loading: false,
        all: action.payload,
      };
    case ACTIONS.NEWS_FETCH_ERROR:
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default newsReducer;
