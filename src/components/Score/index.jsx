import React from 'react';
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';

import { useCounter } from '../../contexts/Counter';

function Score() {
  const { counter, increment, decrement } = useCounter();
  return (
    <div className="container mt-1">
      <div className="row">
        <div className="col text-center">
          <button
            className="btn btn-danger"
            onClick={decrement}
            title="less counter"
          >
            <VscChromeMinimize />
          </button>
        </div>
        <div className="col text-center">
          <h1>{counter}</h1>
        </div>
        <div className="col text-center">
          <button
            className="btn btn-primary"
            onClick={increment}
            title="more counter"
          >
            <VscAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Score;
