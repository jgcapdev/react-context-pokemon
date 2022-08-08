import axios from 'axios';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

export default { getAll };
