import eat from './eat';
import fun from './play';
import fight from './fight';
import sleep from './sleep';

const makeVladimir = () => {
  eat.eatStringBuilder();
  fun.funStringBuilder();
  fight.fightStringBuilder();
  sleep.sleepStringBuilder();
};

export default { makeVladimir };
