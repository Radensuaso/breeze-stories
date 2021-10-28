import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { authorsReducer } from "./authorsReducer";
import { meReducer } from "./meReducer";
import { authorReducer } from "./authorReducer";
import { storiesReducer } from "./storiesReducer";
import { myStoriesReducer } from "./myStoriesReducer";
import { heartedStoriesReducer } from "./heartedStoriesReducer";
import { authorStoriesReducer } from "./authorStoriesReducer";
import { randomStoryReducer } from "./randomStoryReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPTED_PERSIST_KEY!,
    }),
  ],
};

const reducer = combineReducers({
  me: meReducer,
  authors: authorsReducer,
  author: authorReducer,
  stories: storiesReducer,
  myStories: myStoriesReducer,
  heartedStories: heartedStoriesReducer,
  authorStories: authorStoriesReducer,
  randomStory: randomStoryReducer,
});

const persistingReducer = persistReducer(persistConfig, reducer);

export default persistingReducer;
