import { useEffect, useState, useCallback } from 'react';
import seedrandom from 'seedrandom';

const useSpinDice = (interval = 10, isActive = false, dieSize = 6, dieAmount = 4) => {
  const initialValue = [];
  for(let i = 0; i < dieAmount; i++) {
    initialValue.push(0);
  }

  const [number, setNumber] = useState(initialValue);
  const [spinning, setSpinning] = useState(false);

  const tick = useCallback(() => {
    let range = seedrandom('added entropy.', { entropy: true });
    const roll = [];
    for (let i = 0; i < dieAmount; i++) {
      roll.push(Math.ceil(range() * dieSize-1));
    }

    setNumber(roll);
  }, [dieSize, dieAmount]);

  useEffect(() => {
    let timerID;

    if (isActive) {
      setSpinning(true);
      timerID = setInterval(() => tick(), interval);
      setTimeout(() => {
        setSpinning(false);
      }, 1000);
    }

    return () => {
      clearInterval(timerID);
    };
  }, [isActive, interval, tick]);

  return { number, spinning };
}

export default useSpinDice;