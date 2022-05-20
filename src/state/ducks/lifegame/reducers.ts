import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import { next, startAutoPlay, stopAutoPlay } from "./actions";

import World from "../../../lib/world";
import Cell from "../../../lib/cell";

const [a, d] = [new Cell(true), new Cell(false)];
const initialWorld: World = new World([
  [d, d, d],
  [a, a, a],
  [d, d, d]
]);

const world = createReducer(initialWorld, {
  [next.type]: state => state.next()
});

let timerId: NodeJS.Timeout;
const autoPlay = createReducer(false, {
  [startAutoPlay.type]: (_, action) => {
    timerId = setInterval(() => {
      action.payload.dispatch(next());
    }, 500);
    return true;
  },
  [stopAutoPlay.type]: _ => {
    clearInterval(timerId);
    return false;
  }
});

const lifegameReducers = combineReducers({
  world,
  autoPlay
});

export default lifegameReducers;
