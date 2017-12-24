import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  onClick = (id) => {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
      this.props.endTurn();
    }
  }

  isActive(id) {
    if (this.props.ctx.winner !== null) return false;
    if (this.props.G.cells[id] !== null) return false;
    return true;
  }

  render() {
    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(
          <td key={id}
          className={this.isActive(id) ? 'active' : ''}
          onClick={() => this.onClick(id)}>
          {this.props.G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    let winner = '';
    if (this.props.ctx.winner !== null) {
      winner = <div id='winner'>Winner: {this.props.ctx.winner}</div>;
    }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>

        {winner}
      </div>
    );
  }
}

export default Board;
