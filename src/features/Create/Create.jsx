import React, { useReducer, useCallback, useContext, useState } from 'react';
import Input from '../../common/components/Input';
import DropDown from '../../common/components/DropDown';
import { reducer, initialState } from './CreationReducer';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import { MockAPIContext } from '../../context/MockAPIContext';
import { Post } from '../../common/utilities/API';
import Button from '../../common/components/Button';
import './Creation.scss';

const EMPTYMSG = 'Please Roll to get Values';

const CharacterCreation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { roll, setCharacterData } = useContext(CharacterSheetContext);
  const { alignmentList, raceList, classList, setGlobalState } = useContext(MockAPIContext);
  const [error, setError] = useState();

  //TODO: handle if roll is already selected, disable choosing again; diff is selected, reenable choice again
  const handleChange = useCallback((value, type) => {
    dispatch({ type: type, payload: value });
    setCharacterData(type, value);
  }, [dispatch, setCharacterData]);

  const onSubmit = async () => {
    for (let val in state) {
      if (!state[val]) {
        setError(`You are missing a value.  CodeName: ${val}`);
        return;
      }
    }
    setError('');

    const result = await Post(state);
    setGlobalState('CharacterSheet', result);
    return result;
  };

  return (
    <div className='createWrap'>
      <h3 className='title'>Character Creator</h3>
      <div>
        <Input placeholder='Name' value={state.name} onChange={handleChange} />
        <DropDown placeholder='Race' items={raceList} value={state.race} onChange={handleChange} />
        <DropDown placeholder='Class' items={classList} value={state.class} onChange={handleChange} />
        <DropDown placeholder='Alignment' items={alignmentList} value={state.alignment} onChange={handleChange} />
        <DropDown emptyValueMsg={EMPTYMSG} placeholder='Strength' items={roll} value={state.str} onChange={handleChange} />
        <DropDown emptyValueMsg={EMPTYMSG} placeholder='Dexterity' items={roll} value={state.dex} onChange={handleChange} />
        <DropDown emptyValueMsg={EMPTYMSG} placeholder='Constitution' items={roll} value={state.con} onChange={handleChange} />
        <DropDown emptyValueMsg={EMPTYMSG} placeholder='Intellect' items={roll} value={state.int} onChange={handleChange} />
        <DropDown emptyValueMsg={EMPTYMSG} placeholder='Wisdom' items={roll} value={state.wis} onChange={handleChange} />
        <DropDown emptyValueMsg={EMPTYMSG} placeholder='Charisma' items={roll} value={state.cha} onChange={handleChange} />
      </div>
      <div className='submit'>
        <Button value='Submit' onClick={onSubmit} />
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};

// use mobx
// const CharacterCreation = observer(({ name, race, _class, alignment, roll, str, dex, con, int, wis, cha}) => {
//   const [error, setError] = useState();
//   const { alignmentList, raceList, classList, setGlobalState } = useContext(MockAPIContext);

//   //TODO: handle if roll is already selected, disable choosing again; diff is selected, reenable choice again
//   //use mobx store to set updated value
//   const handleChange = (value, type) => {
//     //do work here
//   };

//   const onSubmit = async () => {
//     for (let val in state) {
//       if (!state[val]) {
//         setError(`You are missing a value.  CodeName: ${val}`);
//         return;
//       }
//     }
//     setError('');

//     const result = await Post(state);
//     setGlobalState('CharacterSheet', result);
//     return result;
//   };

//   return (
//     <div className='createWrap'>
//       <h3 className='title'>Character Creator</h3>
//       <div>
//         <Input placeholder='Name' value={name} onChange={handleChange} />
//         <DropDown placeholder='Race' items={raceList} value={race} onChange={handleChange} />
//         <DropDown placeholder='Class' items={classList} value={_class} onChange={handleChange} />
//         <DropDown placeholder='Alignment' items={alignmentList} value={alignment} onChange={handleChange} />
//         <DropDown emptyValueMsg={EMPTYMSG} placeholder='Strength' items={roll} value={str} onChange={handleChange} />
//         <DropDown emptyValueMsg={EMPTYMSG} placeholder='Dexterity' items={roll} value={dex} onChange={handleChange} />
//         <DropDown emptyValueMsg={EMPTYMSG} placeholder='Constitution' items={roll} value={con} onChange={handleChange} />
//         <DropDown emptyValueMsg={EMPTYMSG} placeholder='Intellect' items={roll} value={int} onChange={handleChange} />
//         <DropDown emptyValueMsg={EMPTYMSG} placeholder='Wisdom' items={roll} value={wis} onChange={handleChange} />
//         <DropDown emptyValueMsg={EMPTYMSG} placeholder='Charisma' items={roll} value={cha} onChange={handleChange} />
//       </div>
//       <div className='submit'>
//         <Button value='Submit' onClick={onSubmit} />
//       </div>
//       {error && <span>{error}</span>}
//     </div>
//   );
// });

export default CharacterCreation;