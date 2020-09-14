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
    case 'Strength':
      return { ...state, str: action.payload};
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
    case 'AddRoll':
    default:
      return state;
  }
};