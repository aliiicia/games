import React from 'react';
import { Box } from './Box';
import './Board.css';

export const Board = ({ gameOver, board, onClick }) => {
  const boardRender = board.map((value, index) => {
    return <Box value={value} onClick={() => (value === null || gameOver) && onClick(index)} />
  })
  return (
    <div className='board'>
      {boardRender}
    </div>
  )
}
