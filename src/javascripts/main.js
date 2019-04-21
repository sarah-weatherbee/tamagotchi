import '../styles/main.scss';
import vladimir from './components/vladimir';
import pictureBuilder from './components/pet';

const init = () => {
  vladimir.makeVladimir();
  pictureBuilder.pictureBuilder();
};

init();
