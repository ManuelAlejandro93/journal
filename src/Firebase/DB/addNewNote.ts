import axios from 'axios';

interface data {
  name: 'generic name';
}

export const addNewEmptyNote = async (uuid: string): Promise<data> => {
  //todo: debo enviar este uid desde Journalpage
  uuid.at(0);
  const newNote = {
    title: '',
    body: '',
    date: new Date().getTime()
  };
  newNote;
  try {
    let { data } = await axios.get<data>('https://rickandmortyapi.com/api');
    return data;
  } catch (error) {
    throw error;
  }
};
