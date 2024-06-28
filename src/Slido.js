import React, { useState, useEffect, useCallback } from 'react';

function Slido() {
  const [cells, setCells] = useState([...Array(9).keys()]);
  const [win, setWin] = useState(false);
  const [moveMade, setMoveMade] = useState(false);

  useEffect(() => {
    shuffleCells();
  }, []);

  const shuffleCells = () => {
    let array = [...Array(8).keys()]; 
  
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    array.splice(Math.floor(Math.random() * array.length), 0, null);
  
    setCells(array);
  };

  const checkWinCondition = useCallback((currentCells) => {
    const solvedState = [...Array(8).keys(), null];
  
    const isSolved = currentCells.every((cell, index) => cell === solvedState[index]);
  
    if (isSolved) {
      setTimeout(() => {
        alert('Correct!');
        shuffleCells();
      }, 100);
    }
  }, []);

  const moveCell = useCallback((clickedIndex) => {
    if (win) return;
    
    const blankIndex = cells.findIndex(cell => cell === null);
    if (isAdjacent(clickedIndex, blankIndex)) {
      let newCells = [...cells];
      [newCells[clickedIndex], newCells[blankIndex]] = [newCells[blankIndex], newCells[clickedIndex]];
      setCells(newCells);
      checkWinCondition(newCells);
      setMoveMade(true);
    }
  }, [cells, checkWinCondition, win]);
  
  const isAdjacent = (index1, index2) => {
    const row1 = Math.floor(index1 / 3);
    const col1 = index1 % 3;
    const row2 = Math.floor(index2 / 3);
    const col2 = index2 % 3;
  
    return (row1 === row2 && Math.abs(col1 - col2) === 1) || (col1 === col2 && Math.abs(row1 - row2) === 1);
  };
  
  const handleReset = () => {
    shuffleCells();
    setWin(false);
    setMoveMade(false);
  };

  const handleSolve = () => {
    const solvedState = [...Array(8).keys(), null];
    setCells(solvedState);
    setWin(true);
    setMoveMade(true);
  };

  useEffect(() => {
    const moveCellWithKeyboard = (key) => {
      const blankIndex = cells.findIndex(cell => cell === null);
      let targetIndex = -1;
    
      const row = Math.floor(blankIndex / 3);
      const col = blankIndex % 3;
    
      if (key === 'ArrowLeft' && col < 2) targetIndex = blankIndex + 1;
      if (key === 'ArrowRight' && col > 0) targetIndex = blankIndex - 1;
      if (key === 'ArrowUp' && row < 2) targetIndex = blankIndex + 3;
      if (key === 'ArrowDown' && row > 0) targetIndex = blankIndex - 3;
    
      if (targetIndex !== -1) {
        moveCell(targetIndex);
      }
    };
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        moveCellWithKeyboard(e.key);
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cells, moveCell]); 
  

  return <>
  <div id="shrek">
    <div className="grid-container">
      {cells.map((cell, index) => (
        <div key={index} className="cell" onClick={() => moveCell(index)}>
          {cell !== null && (
            <img src={`/assets/${cell + 1}.png`} alt={`Shrek ${cell}`} />
          )}
        </div>
      ))}
    </div>
    <div id="shrekbuttons">
      <button onClick={handleSolve} disabled={win}>Solve</button>
      <button onClick={handleReset} disabled={!moveMade}>Reset</button>
    </div>
  </div>
  </>
}

export default Slido;
