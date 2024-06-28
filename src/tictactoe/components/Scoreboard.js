import React from 'react';
import './Scoreboard.css';

export const Scoreboard = ({ scores, playerX }) => {
  const { xScore, oScore } = scores;

  return (
    <div className='scoreboard'>
      <span className={`scores x-score ${!playerX && 'inactive'}`}>X - {xScore}</span>
      <span className={`scores o-score ${playerX && 'inactive'}`}>O - {oScore}</span>
    </div>
  )
}
