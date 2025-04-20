import axios from 'axios';

export const googleLogin = async (): Promise<
  'Todo bien en la query' | string
> => {
  try {
    let {
      data: {}
    } = await axios.get('https://rickandmortyapi.com/api/character/2');
    return 'Todo bien en el login de google.';
  } catch (error) {
    console.log(error);
    throw error;
  }
};
