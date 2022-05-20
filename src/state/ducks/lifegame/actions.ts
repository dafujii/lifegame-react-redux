import { createAction } from "@reduxjs/toolkit";

export const next = createAction("NEXT");
export const startAutoPlay = createAction("START_AUTOPLAY", dispatch => ({ payload: { dispatch } }));
export const stopAutoPlay = createAction("STOP_AUTOPLAY");

export default {
  next,
  startAutoPlay,
  stopAutoPlay
};
