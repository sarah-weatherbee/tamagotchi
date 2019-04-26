import util from '../helpers/util';


let strength = 100;

const runAway = () => {
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }

  util.printToDom('strengthScore', strength);
};

const occupyNeighbor = () => {
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  } else if (strength > 100) {
    strength = 100;
  }
  util.printToDom('strengthScore', strength);
};

const fightStringBuilder = () => {
  let domString = '';
  domString += '<div class="fight-card">';
  domString += '<h3>Fight</h3>';
  domString += '<h4>Strength score:</h4>';
  domString += '<div id="strengthScore"><strong>100</strong></div>';
  domString += '<button type="button" class="button" id="runAway">Practice restraint</button>';
  domString += '<button type="button" class="button" id="occupy">Invade neighboring country</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
  document.getElementById('runAway').addEventListener('click', runAway);
  document.getElementById('occupy').addEventListener('click', occupyNeighbor);
};
export default {
  fightStringBuilder,
  runAway,
  occupyNeighbor,
};
