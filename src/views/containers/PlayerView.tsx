import React from "react";
import "./PlayerView.css";
import { useDispatch, useSelector } from "react-redux";

import { lifegameOperations } from "../../state/ducks/lifegame";
import { State } from "../../state/store";

const PlayerView: React.FC = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(lifegameOperations.next());
  }

  function handleAutoPlayClick() {
    const startAutoPlay = () => lifegameOperations.startAutoPlay(dispatch)
    const action = isAutoPlay ? lifegameOperations.stopAutoPlay : startAutoPlay;
    dispatch(action());
  }

  const isAutoPlay = useSelector<State, boolean>(state => state.lifegameState.autoPlay);

  return (
    <div>
      <button className="play-button" onClick={handleAutoPlayClick}>
        {isAutoPlay ? "⏸" : "▶"}
      </button>
      <button className="next-button" onClick={handleClick} disabled={isAutoPlay}>
        Next
      </button>
    </div>
  );
};

export default PlayerView;
