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
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'str':
      return { ...state, str: action.payload};
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
    default:
      return state;
  }
};