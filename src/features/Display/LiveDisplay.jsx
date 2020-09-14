import React, { useContext } from 'react';
import Input from '../../common/components/Input';
import './Display.scss';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import AbilityScoreDisplay from './AbilityScoreDisplay';

const LiveDisplay = () => {
  const state = useContext(CharacterSheetContext);

  return (
    <div className='leftSplit'>
      <h3 className='title'>Live Updated View</h3>
      <div className='liveDisplayTopWrap'>
        <AbilityScoreDisplay str={state.str} dex={state.dex} con={state.con} int={state.int} wis={state.wis} cha={state.cha} />
        <div className='fill' />
        <div className='otherWrap'>
          <Input placeholder='Name' value={state.name} disabled={true} />
          <Input placeholder='Race' value={state.race} disabled={true} />
          <Input placeholder='Class' value={state.class} disabled={true} />
          <Input placeholder='Alignment' value={state.alignment} disabled={true} />
        </div>
      </div>
    </div>
  )
};

//use mobx
// const LiveDisplay = observver(({dex, str, con, int, wis, cha, name, race, _class, alignment}) => {

//   return (
//     <div className='leftSplit'>
//       <h3 className='title'>Live Updated View</h3>
//       <div className='liveDisplayTopWrap'>
//         <AbilityScoreDisplay str={str} dex={dex} con={con} int={int} wis={wis} cha={cha} />
//         <div className='fill' />
//         <div className='otherWrap'>
//           <Input placeholder='Name' value={name} disabled={true} />
//           <Input placeholder='Race' value={race} disabled={true} />
//           <Input placeholder='Class' value={_class} disabled={true} />
//           <Input placeholder='Alignment' value={alignment} disabled={true} />
//         </div>
//       </div>
//     </div>
//   )
// });
export default LiveDisplay;