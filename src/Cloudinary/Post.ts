import axios from 'axios';
export const x = 0;

export const getAPI = async () => {
  let response = await axios.get('https://rickandmortyapi.com/api');
  return response;
};

//
