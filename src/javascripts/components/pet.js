import util from '../helpers/util';

const petStringBuilder = () => {
  let domString = '';
  domString += '<div class= "vladimir">';
  domString += '<h3>Vladimir</h3> <img class="putin" src="https://img.gifmagazine.net/gifmagazine/images/1234681/original.gif">';
  domString += '</div>';

  util.printToDom('pet', domString);
};

export default { petStringBuilder };
