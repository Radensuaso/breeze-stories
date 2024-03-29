import { Dispatch } from "redux";
import { ReduxStore } from "../../types/ReduxStore";
import {
    FILL_AUTHOR_STORIES,
    LOADING_AUTHOR_STORIES,
    ERROR_AUTHOR_STORIES,
} from "./actionTypes";
import axios from "axios";

export const getAuthorStoriesAction = (authorId: string) => {
    return async (dispatch: Dispatch, getState: () => ReduxStore) => {
        try {
            dispatch({
                type: ERROR_AUTHOR_STORIES,
                payload: "",
            });
            dispatch({
                type: LOADING_AUTHOR_STORIES,
                payload: true,
            });
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/stories/author/${authorId}`
            );

            if (response.status === 200) {
                dispatch({
                    type: FILL_AUTHOR_STORIES,
                    payload: response.data,
                });
                dispatch({
                    type: LOADING_AUTHOR_STORIES,
                    payload: false,
                });
            } else {
                dispatch({
                    type: ERROR_AUTHOR_STORIES,
                    payload: response.data.message,
                });
                dispatch({
                    type: LOADING_AUTHOR_STORIES,
                    payload: false,
                });
            }
        } catch (error: any) {
            dispatch({
                type: ERROR_AUTHOR_STORIES,
                payload: error.message,
            });
            dispatch({
                type: LOADING_AUTHOR_STORIES,
                payload: false,
            });
        }
    };
};
