import { Dispatch } from "redux";
import { ReduxStore } from "../../typings/ReduxStore";
import { ERROR, LOADING, FILL_AUTHORS } from "./actionTypes";
import axios from "axios";

export const getAuthorsAction = (name: string) => {
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
        `${process.env.REACT_APP_API_URL}/authors?name=${name}`
      );

      if (response.status === 200) {
        dispatch({
          type: FILL_AUTHORS,
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
