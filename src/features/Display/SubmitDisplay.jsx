import React, { useContext } from 'react';
import './Display.scss';
import { MockAPIContext } from '../../context/MockAPIContext';
import Backstory from '../../common/components/Backstory';
import AbilityScoreDisplay from './AbilityScoreDisplay';

const SubmitDisplay = () => {
  const { characterSheet } = useContext(MockAPIContext);

  return (
    <div className='rightSplit'>
      <h3 className='title'>Domain Driven View</h3>

      {characterSheet &&
        <div>
          <span>Welcome into the universe <span className='highlight'>{characterSheet.name}</span>, a <span className='highlight'>{characterSheet.race} {characterSheet.class} </span>  who tends to be <span className='highlight'>{characterSheet.alignment}</span>.</span>
          <h3>Backstory</h3>
          <Backstory name={characterSheet.name} race={characterSheet.race} />
          <h3>Ability Score</h3>
          <AbilityScoreDisplay str={characterSheet.str} dex={characterSheet.dex} int={characterSheet.int} con={characterSheet.con} wis={characterSheet.wis} cha={characterSheet.cha} horizontal />
        </div>
      }
    </div>
  )
};

export default SubmitDisplay;