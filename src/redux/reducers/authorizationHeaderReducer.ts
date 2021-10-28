import { AnyAction } from "redux";
import {
  FILL_AUTHORIZATION_HEADER,
  LOADING_AUTHORIZATION_HEADER,
  ERROR_AUTHORIZATION_HEADER,
} from "../actions/actionTypes";
import initialState from "../initialState";

export const authorizationHeaderReducer = (
  state = initialState.authorizationHeader,
  action: AnyAction
) => {
  switch (action.type) {
    case FILL_AUTHORIZATION_HEADER:
      return {
        ...state,
        config: {
          ...state.config,
          headers: {
            ...state.config.headers,
            Authorization: `Bearer ${action.payload}`,
          },
        },
      };
    case LOADING_AUTHORIZATION_HEADER:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR_AUTHORIZATION_HEADER:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
