import { configureStore } from "@reduxjs/toolkit";
import * as reducers from "./ducks";

const store = configureStore({
  reducer: reducers
});

const _state = store.getState();
export default store;

export type State = typeof _state;
