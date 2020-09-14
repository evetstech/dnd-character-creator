import React, { createContext, useReducer, useCallback } from 'react';

/**
 * Provider: /App.js
 * Usage: gets/sets committed character sheet data
 * Gets: characterSheet, raceList, classList, alignmentList
 * Set Functions: 
 *   setGlobalState (type, value) => type = type of data updating (FirstLetterCamelCase)
 */
export const MockAPIContext = createContext({
  characterSheet: {
    str: null,
    dex: null,
    con: null,
    int: null,
    wis: null,
    cha: null,
    race: null,
    class: null,
    alignment: null,
    name: null,
  },
  raceList: [],
  classList: [],
  alignmentList: [],
  setGlobalState: () => { }
});

export const MockAPIContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setGlobalState = useCallback((type, value) => {
    dispatch({ type, payload: value });
  }, [dispatch]);

  return (
    <MockAPIContext.Provider value={{ ...state, setGlobalState: setGlobalState }}>
      {props.children}
    </MockAPIContext.Provider>
  );
};

export const initialState = {
  characterSheet: null,
  raceList: null,
  classList: null,
  alignmentList: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CharacterSheet':
      return { ...state, characterSheet: action.payload };
    case 'RaceList':
      return { ...state, raceList: action.payload };
    case 'ClassList':
      return { ...state, classList: action.payload };
    case 'AlignmentList':
      return { ...state, alignmentList: action.payload };
    case 'InitialLoad':
      return { ...state, alignmentList: action.payload.alignmentList, raceList: action.payload.raceList, classList: action.payload.classList}
    default:
      return state;
  }
};