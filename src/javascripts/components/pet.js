import util from '../helpers/util';

const pictureBuilder = () => {
  let domString = '';
  domString += '<div class= "vladimir">';
  domString += '<img class="putin" src="https://img.gifmagazine.net/gifmagazine/images/1234681/original.gif">';
  domString += '<h3>Vladimir</h3>';
  domString += '</div>';

  util.printToDom('pet', domString);
};

export default { pictureBuilder };
