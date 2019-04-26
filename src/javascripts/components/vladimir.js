import eat from './eat';
import fun from './play';
import fight from './fight';
import sleep from './sleep';
import pet from './pet';

const makeVladimir = () => {
  eat.eatStringBuilder();
  fun.funStringBuilder();
  fight.fightStringBuilder();
  sleep.sleepStringBuilder();
  pet.petStringBuilder();
};

export default { makeVladimir };
