import axios from 'axios';

export const logout = async (): Promise<'Logout Ok' | 'Logout not Ok'> => {
  try {
    let { data } = await axios.get<'Logout Ok' | 'Logout not Ok'>(
      'https://rickandmortyapi.com/api/character/2'
    );
    return data;
  } catch (error) {
    return 'Logout not Ok';
  }
};
