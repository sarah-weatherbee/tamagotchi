import util from '../helpers/util';


let fun = 50;

const trollBots = () => {
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }

  util.printToDom('funScore', fun);
};

const hackElection = () => {
  fun += 50;
  if (fun < 0) {
    fun = 0;
  } else if (fun > 100) {
    fun = 100;
  }
  util.printToDom('funScore', fun);
};

const funStringBuilder = () => {
  let domString = '';
  domString += '<div class="card">';
  domString += '<h3>Play</h3>';
  domString += '<h4>Strength:</h4>';
  domString += '<div id="funScore">50</div>';
  domString += '<button type ="button" id="slightlyFun">Make troll bots</button>';
  domString += '<button type ="button" id="veryFun">Hack election</button>';
  domString += '</div>';
  util.printToDom('play', domString);
  document.getElementById('slightlyFun').addEventListener('click', trollBots);
  document.getElementById('veryFun').addEventListener('click', hackElection);
};
export default {
  funStringBuilder,
  trollBots,
  hackElection,
};
