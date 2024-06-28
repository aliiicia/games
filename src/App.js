import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageList from './PageList';

const App = () => {
  return (
    <BrowserRouter>
      <PageList />
    </BrowserRouter>
  );
};

export default App;