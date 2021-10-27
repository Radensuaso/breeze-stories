import { AnyAction } from "redux";
import { FILL_AUTHOR, LOADING, ERROR } from "../actions/actionTypes";
import initialState from "../initialState";

const meReducer = (state = initialState.me, action: AnyAction) => {
  switch (action.type) {
    case FILL_AUTHOR:
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

export default meReducer;
