import { Dispatch } from "redux";
import { ReduxStore } from "../../typings/ReduxStore";
import { ERROR, LOADING, FILL_AUTHOR } from "./actionTypes";
import axios from "axios";
import { authorizationHeader } from "../../lib/authorizationHeader";

export const getMeAction = (name: string) => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    try {
      dispatch({
        type: ERROR,
        payload: "",
      });
      dispatch({
        type: LOADING,
        payload: true,
      });
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/authors?name=${name}`,
        authorizationHeader
      );

      if (response.status === 200) {
        dispatch({
          type: FILL_AUTHOR,
          payload: response.data,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: ERROR,
          payload: response.data.message,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
};
