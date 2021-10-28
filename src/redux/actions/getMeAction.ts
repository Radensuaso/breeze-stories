import { Dispatch } from "redux";
import { AuthorizationHeader, ReduxStore } from "../../typings/ReduxStore";
import { ERROR_ME, LOADING_ME, FILL_ME } from "./actionTypes";
import axios from "axios";

export const getMeAction = (
  name: string,
  config: AuthorizationHeader["config"]
) => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    try {
      dispatch({
        type: ERROR_ME,
        payload: "",
      });
      dispatch({
        type: LOADING_ME,
        payload: true,
      });
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/authors?name=${name}`,
        config
      );

      if (response.status === 200) {
        dispatch({
          type: FILL_ME,
          payload: response.data,
        });
        dispatch({
          type: LOADING_ME,
          payload: false,
        });
      } else {
        dispatch({
          type: ERROR_ME,
          payload: response.data.message,
        });
        dispatch({
          type: LOADING_ME,
          payload: false,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_ME,
        payload: error.message,
      });
      dispatch({
        type: LOADING_ME,
        payload: false,
      });
    }
  };
};