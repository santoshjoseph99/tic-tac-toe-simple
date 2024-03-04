import React from 'react';
import './TicTacToe.css';

enum GameState {
  Empty = '',
  X = 'X',
  Y = 'Y',
}

enum PlayerTurn {
  One,
  Two,
}

const showGameMessage = (state: GameState[], turn: PlayerTurn) => {
  const status = getGameStatus(state, turn);
  if (status) return status;
  return turn === PlayerTurn.One ? 'Player 1 turn' : 'Player 2 turn';
};

const getGameStatus = (state: GameState[], turn: PlayerTurn) => {
  if (checkTie(state)) {
    return 'Game Tied';
  }
  if (checkRows(state)) {
    return turn === PlayerTurn.One ? 'Player 2 Wins!' : 'Player 1 Wins!';
  }
  if (checkColumns(state)) {
    return turn === PlayerTurn.One ? 'Player 2 Wins!' : 'Player 1 Wins!';
  }
  if (checkDiagonals(state)) {
    return turn === PlayerTurn.One ? 'Player 2 Wins!' : 'Player 1 Wins!';
  }
  return '';
};

const checkTie = (state: GameState[]) => {
  return !state.some((x) => x === GameState.Empty);
};

const checkRows = (state: GameState[]) => {
  if (state[0] !== GameState.Empty && state[0] === state[1] && state[1] === state[2]) return true;
  if (state[3] !== GameState.Empty && state[3] === state[4] && state[4] === state[5]) return true;
  if (state[5] !== GameState.Empty && state[6] === state[7] && state[7] === state[8]) return true;
  return false;
};

const checkColumns = (state: GameState[]) => {
  if (state[0] !== GameState.Empty && state[0] === state[3] && state[3] === state[6]) return true;
  if (state[1] !== GameState.Empty && state[1] === state[4] && state[4] === state[7]) return true;
  if (state[2] !== GameState.Empty && state[2] === state[5] && state[5] === state[8]) return true;
  return false;
};

const checkDiagonals = (state: GameState[]) => {
  if (state[0] !== GameState.Empty && state[0] === state[4] && state[4] === state[8]) return true;
  if (state[2] !== GameState.Empty && state[2] === state[4] && state[4] === state[6]) return true;
  return false;
};

const TicTacToe = () => {
  const [gameStates, setGameStates] = React.useState<GameState[]>(() =>
    Array(9).fill(GameState.Empty)
  );
  const [playerTurn, setPlayerTurn] = React.useState(PlayerTurn.One);
  const handleClick = React.useCallback(
    (i: number) => {
      if (gameStates[i] !== GameState.Empty) {
        return;
      }
      const newGameState = [...gameStates];
      newGameState[i] = playerTurn === PlayerTurn.One ? GameState.X : GameState.O;
      setGameStates(newGameState);
      setPlayerTurn(playerTurn === PlayerTurn.One ? PlayerTurn.Two : PlayerTurn.One);
    },
    [gameStates, playerTurn]
  );

  return (
    <div className="grid">
      {showGameMessage(gameStates, playerTurn)}
      {gameStates.map((state, i) => (
        <div key={i} onClick={() => handleClick(i)}>
          {state}
        </div>
      ))}
    </div>
  );
};

export default TicTacToe;
