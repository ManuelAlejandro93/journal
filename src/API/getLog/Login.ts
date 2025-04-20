import axios from 'axios';

export const emailLogin = async (): Promise<
  'Todo bien en la query' | string
> => {
  try {
    let {
      data: {}
    } = await axios.get('https://rickandmortyapi.com/api/character/2');
    return 'Todo bien en la query';
  } catch (error) {
    throw error;
  }
};
