import React, { createContext, useReducer, useCallback } from 'react';

/**
 * Provider: /App.js
 * Usage: gets/sets committed character sheet data
 * Gets: str, dex, con, int, wis, cha, race, class, alignment, rolls
 * Set Functions: 
 *   setCharacterData (type, value) => type = type of data updating (capitalize first letter of type)
 */
export const CharacterSheetContext = createContext({
  str: '',
  dex: '',
  con: '',
  int: '',
  wis: '',
  cha: '',
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
  str: '',
  dex: '',
  con: '',
  int: '',
  wis: '',
  cha: '',
  race: '',
  class: '',
  alignment: '',
  name: '',
  roll: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'str':
      return { ...state, str: action.payload };
    case 'dex':
      return { ...state, dex: action.payload };
    case 'con':
      return { ...state, con: action.payload };
    case 'int':
      return { ...state, int: action.payload };
    case 'wis':
      return { ...state, wis: action.payload };
    case 'cha':
      return { ...state, cha: action.payload };
    case 'race':
      return { ...state, race: action.payload };
    case 'class':
      return { ...state, class: action.payload };
    case 'alignment':
      return { ...state, alignment: action.payload };
    case 'name':
      return { ...state, name: action.payload };
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