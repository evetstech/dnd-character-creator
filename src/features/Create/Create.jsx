/*eslint-disable*/
import React, { useReducer, useCallback, useContext, useState, useEffect } from 'react';
import Input from '../../common/components/Input';
import DropDown from '../../common/components/DropDown';
import { reducer, initialState } from './CreationReducer';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import { MockAPIContext } from '../../context/MockAPIContext';
import { Post } from '../../common/utilities/API';
import Button from '../../common/components/Button';
import StoreWrapper from '../../hoc/StoreWrapper';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import './Creation.scss';
/*eslint-enable*/
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
        <Input onChangeId='name' placeholder='Name' value={state.name} onChange={handleChange} />
        <DropDown onChangeId='race' placeholder='Race' items={raceList} value={state.race} onChange={handleChange} />
        <DropDown onChangeId='class' placeholder='Class' items={classList} value={state.class} onChange={handleChange} />
        <DropDown onChangeId='alignment' placeholder='Alignment' items={alignmentList} value={state.alignment} onChange={handleChange} />
        <DropDown onChangeId='str' emptyValueMsg={EMPTYMSG} placeholder='Strength' items={roll} value={state.str} onChange={handleChange} />
        <DropDown onChangeId='dex' emptyValueMsg={EMPTYMSG} placeholder='Dexterity' items={roll} value={state.dex} onChange={handleChange} />
        <DropDown onChangeId='con' emptyValueMsg={EMPTYMSG} placeholder='Constitution' items={roll} value={state.con} onChange={handleChange} />
        <DropDown onChangeId='int' emptyValueMsg={EMPTYMSG} placeholder='Intellect' items={roll} value={state.int} onChange={handleChange} />
        <DropDown onChangeId='wis' emptyValueMsg={EMPTYMSG} placeholder='Wisdom' items={roll} value={state.wis} onChange={handleChange} />
        <DropDown onChangeId='cha' emptyValueMsg={EMPTYMSG} placeholder='Charisma' items={roll} value={state.cha} onChange={handleChange} />
      </div>
      <div className='submit'>
        <Button value='Submit' onClick={onSubmit} />
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};

// use mobx
// const CharacterCreationMobX = observer(({ store }) => {
//   const [error, setError] = useState();
//   const [rolls, setRolls] = useState();
//   const { alignmentList, raceList, classList, setGlobalState } = useContext(MockAPIContext);

//   //TODO: handle if roll is already selected, disable choosing again; diff is selected, reenable choice again
//   const handleChange = (value, type) => {
//     store.updateCharacterInfo(type, value);
//   };

//   const onSubmit = async () => {
//     for (let val in store) {
//       if (!store[val]) {
//         setError(`You are missing a value.  CodeName: ${val}`);
//         return;
//       }
//     }
//     setError('');

//     const result = await Post(store.getCharacterSheet());
//     setGlobalState('CharacterSheet', result);
//     return result;
//   };

//   //????????
//   useEffect(() => autorun(() => {
//     setRolls(store.roll.toJS());
//   }), [store, setRolls]);

//   return (
//     <div className='createWrap'>
//       <h3 className='title'>Character Creator</h3>
//       <div>
//         <Input onChangeId='name' callbackId='name' placeholder='Name' value={store.name} onChange={handleChange} />
//         <DropDown onChangeId='race' placeholder='Race' items={raceList} value={store.race} onChange={handleChange} />
//         <DropDown onChangeId='class' placeholder='Class' items={classList} value={store.class} onChange={handleChange} />
//         <DropDown onChangeId='alignment' placeholder='Alignment' items={alignmentList} value={store.alignment} onChange={handleChange} />
//         <DropDown onChangeId='str' emptyValueMsg={EMPTYMSG} placeholder='Strength' items={rolls} value={store.str} onChange={handleChange} />
//         <DropDown onChangeId='dex' emptyValueMsg={EMPTYMSG} placeholder='Dexterity' items={rolls} value={store.dex} onChange={handleChange} />
//         <DropDown onChangeId='con' emptyValueMsg={EMPTYMSG} placeholder='Constitution' items={rolls} value={store.con} onChange={handleChange} />
//         <DropDown onChangeId='int' emptyValueMsg={EMPTYMSG} placeholder='Intellect' items={rolls} value={store.int} onChange={handleChange} />
//         <DropDown onChangeId='wis' emptyValueMsg={EMPTYMSG} placeholder='Wisdom' items={rolls} value={store.wis} onChange={handleChange} />
//         <DropDown onChangeId='cha' emptyValueMsg={EMPTYMSG} placeholder='Charisma' items={rolls} value={store.cha} onChange={handleChange} />
//       </div>
//       <div className='submit'>
//         <Button value='Submit' onClick={onSubmit} />
//       </div>
//       {error && <span>{error}</span>}
//     </div>
//   );
// });
// const CharacterCreation = StoreWrapper(CharacterCreationMobX);

export default CharacterCreation;