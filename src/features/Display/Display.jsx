import React from 'react';
import LiveDisplay from './LiveDisplay';
import SubmitDisplay from './SubmitDisplay';
import './Display.scss';

const Display = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <LiveDisplay />
      <div className='lineSplit' />
      <SubmitDisplay />
    </div>
  )
};

export default Display;