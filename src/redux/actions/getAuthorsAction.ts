import { Dispatch } from "redux";
import { ReduxStore } from "../../typings/ReduxStore";
import { ERROR_AUTHORS, LOADING_AUTHORS, FILL_AUTHORS } from "./actionTypes";
import axios from "axios";

export const getAuthorsAction = (name: string) => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    try {
      dispatch({
        type: ERROR_AUTHORS,
        payload: "",
      });
      dispatch({
        type: LOADING_AUTHORS,
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
          type: LOADING_AUTHORS,
          payload: false,
        });
      } else {
        dispatch({
          type: ERROR_AUTHORS,
          payload: response.data.message,
        });
        dispatch({
          type: LOADING_AUTHORS,
          payload: false,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_AUTHORS,
        payload: error.message,
      });
      dispatch({
        type: LOADING_AUTHORS,
        payload: false,
      });
    }
  };
};
