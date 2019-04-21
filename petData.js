import axios from 'axios';

const getPetData = () => axios.get('../db/tamagotchi.json');


export default { getPetData };
