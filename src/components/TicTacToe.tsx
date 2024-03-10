import React from 'react';
import './TicTacToe.css';
import {reducer, TicTacToeActionType, GameState, initialData} from './state';

const TicTacToe = () => {
  const [state, dispatch] = React.useReducer(reducer, initialData);

  return (
    <>
      <div>{state.message}</div>
      <div className="grid">
        {state.board.map((state: GameState, i: number) => (
          <div
            data-testid={`cell-${i}`}
            key={i}
            onClick={() => dispatch({type: TicTacToeActionType.CLICK, payload: {index: i}})}
          >
            {state}
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch({type: TicTacToeActionType.RESET})}>Reset</button>
      </div>
    </>
  );
};

export default TicTacToe;
