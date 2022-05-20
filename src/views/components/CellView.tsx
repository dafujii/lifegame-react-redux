import React from 'react';
import './CellView.css';

import Cell from '../../lib/cell';

const CellView: React.FC<{ cell: Cell }> = ({ cell }) =>
  // <div className={"cell " + cell.isAlive ? "is-alive" : "is-dead"}>
  <div className={`cell ${cell.isAlive ? "is-alive" : "is-dead"}`}>
  </div>

export default CellView;
