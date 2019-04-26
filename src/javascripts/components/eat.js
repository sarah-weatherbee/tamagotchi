import util from '../helpers/util';

import './eat.scss';

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
  domString += '<div class="eat-card">';
  domString += '<h3>Eat</h3>';
  domString += '<h4>Full Score:</h4>';
  domString += '<div id="fullScore">100</div>';
  domString += '<div class="button-wrap">';
  domString += '<button type="button" class="button" id="healthy">Eat borscht</button>';
  domString += '<button type="button" class="button" id="unhealthy">Eat freedom fries</button>';
  domString += '</div>';
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
