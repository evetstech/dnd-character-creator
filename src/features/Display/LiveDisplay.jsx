/*eslint-disable*/
import React, { useContext } from 'react';
import Input from '../../common/components/Input';
import './Display.scss';
import { CharacterSheetContext } from '../../context/CharacterSheetContext';
import AbilityScoreDisplay from './AbilityScoreDisplay';
import { observer } from 'mobx-react';
/*eslint-enable*/
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
// const LiveDisplay = observer(({ store }) => {

//   return (
//     <div className='leftSplit'>
//       <h3 className='title'>Live Updated View</h3>
//       <div className='liveDisplayTopWrap'>
//         <AbilityScoreDisplay str={store.str} dex={store.dex} con={store.con} int={store.int} wis={store.wis} cha={store.cha} />
//         <div className='fill' />
//         <div className='otherWrap'>
//           <Input placeholder='Name' value={store.name} disabled />
//           <Input placeholder='Race' value={store.race} disabled />
//           <Input placeholder='Class' value={store.class} disabled />
//           <Input placeholder='Alignment' value={store.alignment} disabled />
//         </div>
//       </div>
//     </div>
//   )
// });
export default LiveDisplay;