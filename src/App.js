import Client from 'boardgame.io/client';
import Game from 'boardgame.io/game';

const TicTacToe = Game({
  G: { cells: Array(9).fill(null) },

  moves: {
    clickCell(G, ctx, id) {
      let cells = [...G.cells];
      cells[id] = ctx.currentPlayer;
      return {...G, cells};
    }
  }
});

const App = Client({ game: TicTacToe });

export default App;
