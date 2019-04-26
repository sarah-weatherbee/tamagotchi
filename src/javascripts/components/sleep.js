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
  domString += '<h3>Sleep</h3>';
  domString += '<h4>Energy score:</h4>';
  domString += '<div id="sleepScore">50</div>';
  domString += '<button type ="button" class="button" id="nap">Sleeping</button>';
  domString += '<button type ="button" class="button" id="deepSleep">Sleeping forever</button>';
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
