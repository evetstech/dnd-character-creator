import React from 'react';
import { BackstoryGenerator } from '../utilities/BackstoryGenerator';
import './Backstory.scss';

const Backstory = ({name, race}) => {
  const Backstory = BackstoryGenerator(name, race);
  return (
    <div className='backstoryWrapper'>
      {Backstory.intro}<br/><br/>
      {Backstory.raising}<br/><br/>
      {Backstory.mid}<br/><br/>
      {Backstory.end}
    </div>
  )
};

export default Backstory;