import React, { useContext, useCallback, useEffect, useState } from 'react';
import FourD6 from './FourD6';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import './DiceRoll.scss';

const DiceRoll = () => {
  const { roll, setCharacterData } = useContext(CharacterSheetContext);
  const [disableRoll, setDisableRoll] = useState(false);

  const setRoll = useCallback((value) => {
    setCharacterData('AddRoll', value);
  }, [setCharacterData]);

  useEffect(() => {
    if (roll.length === 6) {
      setDisableRoll(true);
    }
  }, [roll]);

  return (
    <>
      <div className={'infoDice'}>
        <span>Number of rolls left: {6 - roll.length}</span>
        <span>Current rolls: [ {roll.map(value => value + ' ')}]</span>
      </div>
      <div className='DiceRollWrap'>
        <FourD6 setRoll={setRoll} disableRoll={disableRoll} />
      </div>
    </>
  );
};

// use mobx
// const DiceRoll = observer(({roll, functionToUpdateRoll}) => {
//   const [disableRoll, setDisableRoll] = useState(false);

//   //update to use mobx
//   const setRoll = (value) => {
//     functionToUpdateRoll(value)
//   };

//   useEffect(() => {
//     if (roll.length === 6) {
//       setDisableRoll(true);
//     }
//   }, [roll]);

//   return (
//     <>
//       <div className={'infoDice'}>
//         <span>Number of rolls left: {6 - roll.length}</span>
//         <span>Current rolls: [ {roll.map(value => value + ' ')}]</span>
//       </div>
//       <div className='DiceRollWrap'>
//         <FourD6 setRoll={setRoll} disableRoll={disableRoll} />
//       </div>
//     </>
//   );
// });
export default DiceRoll;