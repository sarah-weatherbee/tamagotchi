import util from '../helpers/util';


let energy = 50;

const nap = () => {
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }

  util.printToDom('sleepScore', energy);
};

const deepSlumber = () => {
  energy += 60;
  if (energy < 0) {
    energy = 0;
  } else if (energy > 100) {
    energy = 100;
  }
  util.printToDom('sleepScore', energy);
};

const sleepStringBuilder = () => {
  let domString = '';
  domString += '<div class="sleep-card">';
  domString += '<h3>Sleep Score</h3>';
  domString += '<div class="score-info">';
  domString += '<div id="sleepScore"><h3>50</h3></div>';
  domString += '</div>';
  domString += '<div class="button-wrap">';
  domString += '<button type ="button" class="button" id="nap">Sleep is for the weak</button>';
  domString += '<button type ="button" class="button" id="deepSleep">Cannot wake up</button>';
  domString += '</div>';
  domString += '</div>';

  util.printToDom('sleep', domString);
  document.getElementById('nap').addEventListener('click', nap);
  document.getElementById('deepSleep').addEventListener('click', deepSlumber);
};
export default {
  sleepStringBuilder,
  nap,
  deepSlumber,
};
