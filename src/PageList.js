import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Slido from './Slido';
import TicTacToe from './tictactoe/TicTacToe';

function PageList() {

  return (
    <div id="page-container">
      <NavBar />
      <div id="content-wrap">
        <Routes>
          <Route path='/' element={<Slido />} />
          <Route path='/tictactoe' element={<TicTacToe />} />
        </Routes>
      </div>
    </div>
  );
}

export default PageList;
