import {render, screen, waitFor} from '@testing-library/react';
import TicTacToe from './TicTacToe';
import {act} from 'react-dom/test-utils';

describe('TicTacToe', () => {
  it('renders component', () => {
    render(<TicTacToe />);
    expect(screen.getByText('Player 1 turn')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('player 1 clicks on cell', async () => {
    render(<TicTacToe />);
    const cell = screen.getByTestId('cell-0');
    act(() => {
      cell.click();
    });
    await waitFor(() => {
      expect(cell).toHaveTextContent('X');
    });
  });

  it('player 2 clicks on cell', async () => {
    render(<TicTacToe />);
    const cell = screen.getByTestId('cell-0');
    act(() => {
      cell.click();
    });
    const cell1 = screen.getByTestId('cell-1');
    act(() => {
      cell1.click();
    });
    await waitFor(() => {
      expect(cell1).toHaveTextContent('O');
    });
  });

  it('player 1 wins', async () => {
    render(<TicTacToe />);
    const cell = screen.getByTestId('cell-0');
    act(() => {
      cell.click();
    });
    const cell1 = screen.getByTestId('cell-1');
    act(() => {
      cell1.click();
    });
    const cell2 = screen.getByTestId('cell-3');
    act(() => {
      cell2.click();
    });
    const cell3 = screen.getByTestId('cell-4');
    act(() => {
      cell3.click();
    });
    const cell4 = screen.getByTestId('cell-6');
    act(() => {
      cell4.click();
    });
    await waitFor(() => {
      expect(screen.getByText('Player 1 Wins!')).toBeInTheDocument();
    });
  });

  it('player 2 wins', async () => {
    render(<TicTacToe />);
    const cell = screen.getByTestId('cell-0');
    act(() => {
      cell.click();
    });
    const cell1 = screen.getByTestId('cell-1');
    act(() => {
      cell1.click();
    });
    const cell2 = screen.getByTestId('cell-3');
    act(() => {
      cell2.click();
    });
    const cell3 = screen.getByTestId('cell-4');
    act(() => {
      cell3.click();
    });
    const cell4 = screen.getByTestId('cell-2');
    act(() => {
      cell4.click();
    });
    const cell5 = screen.getByTestId('cell-7');
    act(() => {
      cell5.click();
    });
    await waitFor(() => {
      expect(screen.getByText('Player 2 Wins!')).toBeInTheDocument();
    });
  });

  it.skip('draw', async () => {
    render(<TicTacToe />);
    const cell = screen.getByTestId('cell-0');
    act(() => {
      cell.click();
    });
    const cell1 = screen.getByTestId('cell-1');
    act(() => {
      cell1.click();
    });
    const cell2 = screen.getByTestId('cell-2');
    act(() => {
      cell2.click();
    });
    const cell3 = screen.getByTestId('cell-3');
    act(() => {
      cell3.click();
    });
    const cell4 = screen.getByTestId('cell-5');
    act(() => {
      cell4.click();
    });
    const cell5 = screen.getByTestId('cell-4');
    act(() => {
      cell5.click();
    });
    const cell6 = screen.getByTestId('cell-6');
    act(() => {
      cell6.click();
    });
    const cell7 = screen.getByTestId('cell-8');
    act(() => {
      cell7.click();
    });
    const cell8 = screen.getByTestId('cell-7');
    act(() => {
      cell8.click();
    });
    await waitFor(() => {
      expect(screen.getByText('Game Tied')).toBeInTheDocument();
    });
  });
});
