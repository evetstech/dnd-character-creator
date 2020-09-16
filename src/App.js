import React, { useContext, useEffect } from 'react';
import './App.scss';
import Creation from './features/Create/Create';
import DiceRoll from './features/DiceRoll/DiceRoll';
import Display from './features/Display/Display';
import { CharacterSheetProvider } from './context/CharacterSheetContext';
import { MockAPIContext } from './context/MockAPIContext';
import { GetInitialData } from './common/utilities/API';

function App() {
  const { setGlobalState } = useContext(MockAPIContext);

  useEffect(() => {
    const getInitial = async () => {
      const result = await GetInitialData();
      setGlobalState('InitialLoad', result);
    }

    getInitial();
  }, [setGlobalState]);

  return (
    <div id='topLevel'>
      <CharacterSheetProvider>
        <div id='leftCol'>
          <div className='createBox'>
            <Creation />
          </div>
          <div className='diceBox'>
            <DiceRoll />
          </div>
        </div>
        <div className='displayBox'>
          <Display />
        </div>
      </CharacterSheetProvider>
    </div >
  );
}

export default App;
