import { AnyAction } from "redux";
import { FILL_AUTHORS, LOADING, ERROR } from "../actions/actionTypes";
import initialState from "../initialState";

const authorsReducer = (state = initialState.authors, action: AnyAction) => {
  switch (action.type) {
    case FILL_AUTHORS:
      return {
        ...state,
        data: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authorsReducer;
