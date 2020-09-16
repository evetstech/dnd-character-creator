import React from 'react';
import LiveDisplay from './LiveDisplay';
import SubmitDisplay from './SubmitDisplay';
import './Display.scss';
import StoreWrapper from '../../hoc/StoreWrapper';

const LiveDisplayWithStore = StoreWrapper(LiveDisplay);
const Display = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <LiveDisplayWithStore />
      <div className='lineSplit' />
      <SubmitDisplay />
    </div>
  )
};

export default Display;