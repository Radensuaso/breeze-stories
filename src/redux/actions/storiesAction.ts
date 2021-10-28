import { Dispatch } from "redux";
import { ReduxStore } from "../../typings/ReduxStore";
import { ERROR_STORIES, LOADING_STORIES, FILL_STORIES } from "./actionTypes";
import axios from "axios";

export const getAuthorsAction = (
  title: string,
  categories: string,
  skip: string,
  limit: string
) => {
  return async (dispatch: Dispatch, getState: () => ReduxStore) => {
    try {
      dispatch({
        type: ERROR_STORIES,
        payload: "",
      });
      dispatch({
        type: LOADING_STORIES,
        payload: true,
      });
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/stories?title=${title}&categories=${categories}&skip=${skip}&limit=${limit}`
      );

      if (response.status === 200) {
        dispatch({
          type: FILL_STORIES,
          payload: response.data,
        });
        dispatch({
          type: LOADING_STORIES,
          payload: false,
        });
      } else {
        dispatch({
          type: ERROR_STORIES,
          payload: response.data.message,
        });
        dispatch({
          type: LOADING_STORIES,
          payload: false,
        });
      }
    } catch (error: any) {
      dispatch({
        type: ERROR_STORIES,
        payload: error.message,
      });
      dispatch({
        type: LOADING_STORIES,
        payload: false,
      });
    }
  };
};
