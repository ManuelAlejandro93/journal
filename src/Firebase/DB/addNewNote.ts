import axios from 'axios';

interface data {
  name: 'generic name';
}

export const addNewEmptyNote = async (): Promise<data> => {
  try {
    let { data } = await axios.get<data>('https://rickandmortyapi.com/api');
    return data;
  } catch (error) {
    throw error;
  }
};
