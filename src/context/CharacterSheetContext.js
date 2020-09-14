import React, { createContext, useReducer, useCallback } from 'react';

/**
 * Provider: /App.js
 * Usage: gets/sets committed character sheet data
 * Gets: str, dex, con, int, wis, cha, race, class, alignment, rolls
 * Set Functions: 
 *   setCharacterData (type, value) => type = type of data updating (capitalize first letter of type)
 */
export const CharacterSheetContext = createContext({
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0,
  race: '',
  class: '',
  alignment: '',
  name: '',
  rolls: [],
  setCharacterData: () => { }
});

export const CharacterSheetProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setCharacterData = useCallback((type, value) => {
    dispatch({ type, payload: value });
  }, [dispatch]);

  return (
    <CharacterSheetContext.Provider value={{ ...state, setCharacterData: setCharacterData }}>
      {props.children}
    </CharacterSheetContext.Provider>
  );
};

export const initialState = {
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0,
  race: '',
  class: '',
  alignment: '',
  name: '',
  playerName: '',
  roll: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'Strength':
      return { ...state, str: action.payload };
    case 'Dexterity':
      return { ...state, dex: action.payload };
    case 'Constitution':
      return { ...state, con: action.payload };
    case 'Intellect':
      return { ...state, int: action.payload };
    case 'Wisdom':
      return { ...state, wis: action.payload };
    case 'Charisma':
      return { ...state, cha: action.payload };
    case 'Race':
      return { ...state, race: action.payload };
    case 'Class':
      return { ...state, class: action.payload };
    case 'Alignment':
      return { ...state, alignment: action.payload };
    case 'Name':
      return { ...state, name: action.payload };
    case 'Player Name':
      return { ...state, playerName: action.payload };
    case 'AddRoll':
      const roll = [...state.roll];
      roll.push(action.payload);
      return { ...state, roll: roll.sort((a, b) => a - b) };
    case 'ClearRolls':
      return { ...state, roll: [] };
    default:
      return state;
  }
};