import React, { useEffect, useState } from 'react';
import useSpinDice from '../../hooks/useSpinDice';

/**
 * Generates a x sided dice
 */
const Dice = ({ amount = 4, dieSize = 6, minIndex, value = [0, 0, 0, 0], activateSpin, onChange = () => { } }) => {
  const { number, spinning } = useSpinDice(100, activateSpin, dieSize, amount);
  const [dieValue, setDieValue] = useState();

  useEffect(() => {
    setDieValue(number);
  }, [spinning, number]);

  useEffect(() => {
    if (value !== undefined && dieValue !== undefined && JSON.stringify(value) !== JSON.stringify(dieValue)) {
      onChange(dieValue, spinning);
    }
  }, [onChange, dieValue, value, spinning]);

  return (
    <div>
      {value.map((val, index) => {
        return (<span key={index} style={{ color: minIndex === index ? 'red' : 'green' }}>{String.fromCharCode(9856 + (val))}</span>)
      })}
    </div>
  )
};

export default Dice;