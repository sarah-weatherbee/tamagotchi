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
  domString += '<div class="play-card">';
  domString += '<h3>Play Score</h3>';
  domString += '<div class="score-info">';
  domString += '<div id="funScore"><h3>50</h3></div>';
  domString += '</div>';
  domString += '<div class="button-wrap">';
  domString += '<button type="button" class="button" id="slightlyFun">Make troll bots</button>';
  domString += '<button type="button" class="button" id="veryFun">Hack election</button>';
  domString += '</div>';
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
