import {describe, expect, it} from 'vitest';
import {reducer, TicTacToeActionType, GameState, initialData} from './state';

describe('Reducer tests', () => {
  it('handle RESET action', () => {
    const state = {
      ...initialData,
      finished: true,
      board: [
        GameState.X,
        GameState.O,
        GameState.X,
        GameState.O,
        GameState.X,
        GameState.O,
        GameState.X,
        GameState.O,
        GameState.X,
      ],
    };
    const action = {type: TicTacToeActionType.RESET, payload: {index: 0}};
    const newState = reducer(state, action);
    expect(newState).toEqual(initialData);
  });

  it('handle CLICK action', () => {
    const state = initialData;
    const action = {type: TicTacToeActionType.CLICK, payload: {index: 0}};
    const newState = reducer(state, action);
    expect(newState.board[0]).toEqual(GameState.X);
  });

  it('handle CLICK action on non-empty cell', () => {
    const state = {
      ...initialData,
      board: [
        GameState.X,
        GameState.Empty,
        GameState.Empty,
        GameState.Empty,
        GameState.Empty,
        GameState.Empty,
        GameState.Empty,
        GameState.Empty,
        GameState.Empty,
      ],
    };
    const action = {type: TicTacToeActionType.CLICK, payload: {index: 0}};
    const newState = reducer(state, action);
    expect(newState).toEqual(state);
  });

  it('handle CLICK action on finished game', () => {
    const state = {
      ...initialData,
      finished: true,
      board: [
        GameState.X,
        GameState.O,
        GameState.X,
        GameState.O,
        GameState.X,
        GameState.O,
        GameState.X,
        GameState.O,
        GameState.X,
      ],
    };
    const action = {type: TicTacToeActionType.CLICK, payload: {index: 0}};
    const newState = reducer(state, action);
    expect(newState).toEqual(state);
  });
});
