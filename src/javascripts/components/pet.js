import util from '../helpers/util';

const petStringBuilder = () => {
  let domString = '';
  domString += '<div class= "vladimir">';
  domString += '<p>Dear citizen, you have encountered <strong>Vladimir</strong>. Push his buttons at your own risk. The fate of the country is at your fingertips.</p>';
  domString += '<img class="putin" src="https://img.gifmagazine.net/gifmagazine/images/1234681/original.gif">';
  domString += '</div>';

  util.printToDom('pet', domString);
};

export default { petStringBuilder };
