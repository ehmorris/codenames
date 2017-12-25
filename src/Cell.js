import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <div
        className={`Cell ${this.props.active ? 'Cell--active' : ''}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Cell;
