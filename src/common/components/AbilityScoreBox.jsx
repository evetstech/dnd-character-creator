import React from 'react';
import './AbilityScoreBox.scss';

const AbilityScoreBox = ({ type, value }) => {
  return (
    <>
      <div className='abilityScoreBox'>
        {type}
        <span className='abilityModifier'>
          <span>
            {getAbilityScoreModifier(value)}
          </span>
        </span>
        <div className='abilityScore'>
          <span className='dot'>
            <span>
              {value !== 0 ? value : ''}
            </span>
          </span>
        </div>
      </div>
    </>
  )
};

const getAbilityScoreModifier = (score) => {
  if (!score) {
    return '';
  }

  return Math.floor((score - 10) / 2);
}
export default AbilityScoreBox;