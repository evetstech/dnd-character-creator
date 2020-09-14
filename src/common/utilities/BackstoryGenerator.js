import seedrandom from 'seedrandom';

export const BackstoryGenerator = (name, race) => {
  let range = seedrandom('added entropy.', { entropy: true });
  const randomizer = [];
  for (let i = 0; i < 4; i++) {
    randomizer.push(Math.ceil(range() * 3));
  }

  return STORIES(name, race, randomizer);
}

const STORIES = (name, race, randomizer) => {
  return {
    intro: INTROS(name, race)[randomizer[0]],
    raising: RAISING(name, race)[randomizer[1]],
    mid: MID(name, race)[randomizer[2]],
    end: END(name, race)[randomizer[3]]
  }
}

const INTROS = (name, race) => [
  `${name} is analytical, dutiful, determined and perhaps a little too anxious. Which isn't out of the ordinary for someone with ${name}'s position.`,
  `${name}'s just, adventurous, faithful and perhaps a little too bewildered. But what'd you expect from somebody with ${name}'s position.`,
  `${name} is quick, gentle, sensitive and perhaps a little too timid. This is to be expected from somebody with ${name}'s position.`,
  `${name}'s energetic, faithful, curious and perhaps a little too pompous. But this is all just a facade, a mechanism to deal with ${name}'s position.`,
  `${name}'s analytical, jovial, faithful and perhaps a little too anxious. But what'd you expect from somebody with ${name}'s position.`,
  `${name}'s calm, brave, affectionate and perhaps a little too anxious. Which isn't out of the ordinary for someone with ${name}'s position.`,
];

const RAISING = (name, race) => [
  `${name} was born in a small family in an important city, and lived free of trouble until ${name} was about 11 years old, but at that point things changed.`,
  `${name} was born in a successful family in a large city, and lived free of worries until ${name} was about 18 years old, but at that point things changed.`,
  `${name} was born in a large family in an important port. ${name} lived free of trouble until ${name} was about 15 years old, but at that point life began to change.`,
  `${name} was born in a fairly rich family in an important port. ${name} lived comfortably until ${name} was about 14 years old, but at that point life changed.`,
  `${name} was born in a large family in a large town. ${name} lived free of worries until ${name} was about 18 years old, but at that point life changed.`,
  `${name} was born in a fairly rich family in a developing city. ${name} lived free of worries until ${name} was about 18 years old, but at that point life began to change.`,

];

const MID = (name, race) => [
  `${name} went to college and was competing in large tournaments. With the help of great friends, ${name} blossomed in a wonderful world. But with ${name}'s determination and powers, there's nothing to stop this ${race} from staying ahead of the game. ${name} could quickly become a force to be reckoned with.`,
  `${name} moved to another country and was learning how to cook in new styles. With a great deal of determination, ${name} reached for the stars in a fast changing world. But with diligence and capability, there's nothing to stop this ${race} from accomplishing anything. ${name} could quickly become somebody who could change the world.`,
  `${name} started to travel the world in search of love. With a great deal of determination, ${name} lives the dream in a ever changing world. But with ${name}'s skills and charm, there's nothing to stop ${name} from staying ahead of the game. ${name} could quickly become a force to be reckoned with.`,
  `${name} moved to another country and was learning how to cook in new styles. After an astonishing adventure, ${name} is going on a journey in a remarkable world. But with ${name} perseverance and brilliance, there's nothing to stop ${name} from staying ahead of the game. ${name} could quickly become a friend you'd want by your side.`,
  `${name} did a lot of small jobs and was gaining a little fame. Having overcome plenty of obstacles, ${name} is trying to help others in a crazy world. But with ${name} brilliance and persistence, there's nothing to stop ${name} from reaching full potential. ${name} could quickly become a force to be reckoned with.`,
  `${name} started to travel a lot and was learning a new language. Through hard work, ${name} is exploring new areas in a wacky world. But with ${name} curiosity and persistence, there's nothing to stop ${name} from finding a way to the top. ${name} could quickly become a great leader, perhaps even of the nation.`,

];

const END = (name, race) => [
  `However, ${name} is currently still trying to perfect skills. This ${race} feels like there's more than we know in this world. Luckily there are plenty of resources to support ${name}.`,
  `But only time will tell; ${name} is currently improving upon skills and talents. ${name} feels like there's more to see, taste and experience in this world. Luckily ${name} has a close group of friends as support.`,
  `Will things go ${name}'s way?  Only time will tell in this ${race}'s adventure.`,
  `However, ${name} is currently improving upon skills and talents. ${name} feels like there's more people to meet in this world. Luckily ${name} has wise teachers and great friends to support ${name}.`,
  `But anything could happen; ${name} is currently enjoying the world and its beauty. ${name} feels like there's more to discover in this world. Luckily ${name} has amazing friends to support ${name}.`,
  `But who really knows what will happen; ${name} is currently searching for a higher purpose. ${name} feels like there's more than what we get to know in this world. Luckily ${name} has great parents to support ${name}.`,
];