import React, { useEffect } from "react";
import "./App.css";

import WorldView from "./components/WorldView";
import PlayerView from "./containers/PlayerView";
import { lifegameOperations } from "../state/ducks/lifegame";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(lifegameOperations.startAutoPlay(dispatch));
  });

  return (
    <div className="App">
      <WorldView></WorldView>
      <PlayerView></PlayerView>
    </div>
  );
};

export default App;
