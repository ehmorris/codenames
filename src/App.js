import Client from 'boardgame.io/client';
import TicTacToe from './TicTacToe';
import Board from './Board';

const App = Client({
  game: TicTacToe,
  board: Board
});

export default App;
