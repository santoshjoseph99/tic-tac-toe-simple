export enum GameState {
  Empty = '',
  X = 'X',
  O = 'O',
}

export enum PlayerTurn {
  One,
  Two,
}

export enum TicTacToeActionType {
  CLICK = 'CLICK',
  RESET = 'RESET',
}

type ClickPayload = {
  index: number;
};

type TicTacToeAction = {
  type: TicTacToeActionType;
  payload: ClickPayload;
};

export type State = {
  board: Array<GameState>;
  playerTurn: PlayerTurn;
  message: string;
  finished: boolean;
};

export const initialData: State = {
  board: Array(9).fill(GameState.Empty),
  playerTurn: PlayerTurn.One,
  message: 'Player 1 turn',
  finished: false,
};

const getGameMessage = (state: GameState[], turn: PlayerTurn) => {
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
  if (state[6] !== GameState.Empty && state[6] === state[7] && state[7] === state[8]) return true;
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

export const reducer = (state: State, action: TicTacToeAction) => {
  switch (action.type) {
    case TicTacToeActionType.CLICK: {
      if (state.finished) {
        return state;
      }
      if (state.board[action.payload.index] !== GameState.Empty) {
        return state;
      }
      const newBoard = [...state.board];
      newBoard[action.payload.index] =
        state.playerTurn === PlayerTurn.One ? GameState.X : GameState.O;
      const nextPlayerTurn = state.playerTurn === PlayerTurn.One ? PlayerTurn.Two : PlayerTurn.One;
      const message = getGameMessage(newBoard, nextPlayerTurn);
      return {
        ...state,
        board: newBoard,
        playerTurn: nextPlayerTurn,
        message,
        finished: message.search('Win') > 0,
      };
    }
    case TicTacToeActionType.RESET: {
      return initialData;
    }
    default:
      break;
  }
  return state;
};
