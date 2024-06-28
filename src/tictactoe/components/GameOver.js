import React from 'react';
import './GameOver.css';

export const GameOver = ({ gameOver, board, checkWin }) => {
  if (!gameOver) {
    return;
  } 
  
  let winner = checkWin(board);

  if (winner === 'X') {
    return <div className='end X' >X wins 😀</div>
  } else if (winner === 'O') {
    return <div className='end O' >O wins 😀</div>
  } else {
    return <div className='end tie' >Tie 😔</div>
  }
}

