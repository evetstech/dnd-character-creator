import React from 'react';
import AbilityScoreBox from '../../common/components/AbilityScoreBox';
import './Display.scss';

const AbilityScoreDisplay = ({str, dex, con, int, wis, cha, horizontal = false}) => {
  return (
    <div className={horizontal ? 'abilityScoresHori' : 'abilityScoresVert'}>
      <AbilityScoreBox type='Strength' value={str} />
      <AbilityScoreBox type='Dexterity' value={dex} />
      <AbilityScoreBox type='Constitution' value={con} />
      <AbilityScoreBox type='Intellect' value={int} />
      <AbilityScoreBox type='Wisdom' value={wis} />
      <AbilityScoreBox type='Charisma' value={cha} />
    </div>
  )
};

export default AbilityScoreDisplay;