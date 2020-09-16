import { observable, action } from 'mobx';
import { initialState } from './CharacterSheetContext';

const store = observable({
  //same as context state
  ...initialState,

  //type can be str/dex/wis/int/con/cha/race/name/alignment/class
  updateCharacterInfo: action((type, val) => {
    if (type === 'roll') {
      return;
    }

    store[type] = val;
  }),

  //adds a roll to the roll array
  addRoll: action(val => {
    store.roll.push(val);
    store.roll.replace(store.roll.slice().sort((a,b) => a - b));
  }),
  getCharacterSheet: () => {
    return { cha: store.cha, str: store.str, dex: store.dex, wis: store.wis, int: store.int, con: store.con, race: store.race, name: store.name, alignment: store.alignment, class: store.class }
  }
});

export default store;