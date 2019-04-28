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
  domString += '<h3>Fight Score</h3>';
  domString += '<div class="score-info">';
  domString += '<div id="strengthScore"><h3>100</h3></div>';
  domString += '</div>';
  domString += '<div class="button-wrap">';
  domString += '<button type="button" class="button" id="runAway">Practice restraint</button>';
  domString += '<button type="button" class="button" id="occupy">Invade neighbor</button>';
  domString += '</div>';
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
