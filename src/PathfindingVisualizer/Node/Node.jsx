import React, { Component } from "react";

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;
    const extraClassName = isFinish
      ? `node-finish`
      : isStart
      ? `node-start`
      : isWall
      ? `node-wall`
      : "";

    return (
      <div>
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseDown(row, col)}
        onMouseUp={() => onMouseDown(row, col)}
      </div>
    );
  }
}
