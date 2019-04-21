import util from '../helpers/util';
// import './eat.scss';

let full = 100;

const eatBorscht = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }
  console.error('hi', full);
  util.printToDom('fullScore', full);
};

const eatFreedomFries = () => {
  full -= 3;
  if (full < 0) {
    full = 0;
  }
  util.printToDom('fullScore', full);
};

const eatStringBuilder = () => {
  let domString = '';
  // do I need a forEach loop if I'm just building the eat quadrant here?
  domString += '<div class="card">';
  domString += '<h3>Eat</h3>';
  domString += '<h4>Strength:</h4>';
  domString += '<div id="fullScore">100</div>';
  domString += '<button type ="button" id="healthy">Borscht</button>';
  domString += '<button type ="button" id="unhealthy">Freedom Fries</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', eatBorscht);
  document.getElementById('unhealthy').addEventListener('click', eatFreedomFries);
};
export default {
  eatStringBuilder,
  eatBorscht,
  eatFreedomFries,
};
