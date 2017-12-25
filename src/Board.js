import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component {
  Activate(id) {
    debugger;

    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
      this.props.endTurn();
    }
  }

  isActive(id) {
    return !(this.props.ctx.winner || this.props.G.cells[id]);
  }

  render() {
    let cells = [];

    for (let id = 0; id < 9; id++) {
      cells.push(
        <Cell
          key={id}
          active={this.isActive(id)}
          onClick={this.Activate(id)}
        >
          {this.props.G.cells[id]}
        </Cell>
      )
    }

    return (
      <div>
        <div className="Board">
          {cells}
        </div>

        {this.props.ctx.winner &&
          <div>
            Winner: {this.props.ctx.winner}
          </div>
        }
      </div>
    );
  }
}

export default Board;
