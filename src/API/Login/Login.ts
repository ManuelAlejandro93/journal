import axios from 'axios';

export const login = async (): Promise<'Login Ok' | 'Login not Ok'> => {
  try {
    let { data } = await axios.get<'Login Ok' | 'Login not Ok'>(
      'https://rickandmortyapi.com/api/character/2'
    );
    return data;
  } catch (error) {
    return 'Login not Ok';
  }
};
