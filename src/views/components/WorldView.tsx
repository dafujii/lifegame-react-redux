import React from 'react';
import './WorldView.css';
import { useSelector } from 'react-redux';
import { State } from '../../state/store';

import World from '../../lib/world';
import Cell from '../../lib/cell';
import CellView from './CellView';

const CellRow: React.FC<{ row: Cell[] }> = ({ row }) =>
  <div className="cell-row">
    {row.map(cell => <CellView cell={cell} />)}
  </div>;

const WorldView: React.FC = () => {
  const world = useSelector<State, World>(state => state.lifegameState.world);

  return <div className="">
    {world.cells.map(row => <CellRow row={row} />)}
  </div>;
}

export default WorldView;
