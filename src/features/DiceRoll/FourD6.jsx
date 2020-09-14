import React, { useState, useEffect } from 'react';
import Dice from '../../common/components/Dice';
import Button from '../../common/components/Button';
import { getMinIndex } from '../../common/utilities/Comparison';
import './Dice.scss';

const FourD6 = ({ setRoll, disableRoll }) => {
  const [activateSpin, setActivateSpin] = useState(false);
  const [dieValues, setDieValues] = useState([0, 0, 0, 0]);
  const [initial, setInitial] = useState(true);
  const [minIndex, setMinIndex] = useState(-1);
  const setVal = (val, spinning) => {
    setDieValues(val);

    if (!spinning) {
      setActivateSpin(false);
      setInitial(false);
    }
  };

  const onSpinDie = () => {
    setMinIndex(-1);
    setActivateSpin(true);
  };

  useEffect(() => {
    if (!activateSpin && !initial) {
      const _minIndex = getMinIndex(dieValues);
      setMinIndex(_minIndex);
      setRoll(dieValues.reduce((a, b, index) => index === _minIndex ? a : a + b, 3));
    }
  }, [setRoll, setInitial, initial, dieValues, activateSpin]);

  return (
    <div className='diceControl'>
      <Dice value={dieValues} minIndex={minIndex} activateSpin={activateSpin} onChange={setVal} amount={4} diceSize={6} />
      <Button onClick={onSpinDie} value={'Roll'} disabled={disableRoll || activateSpin} />
    </div>
  );
};

export default FourD6;