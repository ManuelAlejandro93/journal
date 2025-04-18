//! Pasos para crear un thunk.

//?.......................................................
//? Capitulo1: Componente = Slice + thunk.

//! los thunks son extensiones de los slices. Necesito tener un slice
import { createSlice } from '@reduxjs/toolkit';

//!Importo las interfaces que necesite.
import { Morty } from '@/interfaces';

//! importo mi thunk per sé. Esto va a extender mi slice
import { getMortyThunk } from './thunks';

//! defino el tipado de la data per sé que voy a manejar.
type MortyData = Morty | null;

//! defino el tipado de un paquete de datos y metadatos asíncronos. Es
interface MortyState {
  mortyData: MortyData;
  state: 'fulfilled' | 'rejected' | 'pending' | null;
  error: 'Error, Papi.' | null;
}

//!Inicializo mi estado del slice
const initialState: MortyState = {
  mortyData: null,
  state: null,
  error: null
};

//! creo mi slice
const mortySlice = createSlice({
  name: 'morty',
  initialState,
  reducers: {},
  //! amplio las funcionalidades de mi slice para que tenga
  extraReducers(builder) {
    builder
      .addCase(getMortyThunk.fulfilled, (morty, action) => {
        //! todos los thunk devuelven la propiedad fulfilled
        //! luego modifico mi paquete de datos asíncrono como yo
        morty.state = 'fulfilled';
        morty.mortyData = action.payload as MortyData;
      })
      .addCase(getMortyThunk.rejected, (morty) => {
        //! todos los thunk devuelven la propiedad rejected
        //! luego modifico mi paquete de datos asíncrono como yo
        morty.state = 'rejected';
        morty.mortyData = null;
        morty.error = 'Error, Papi.';
      })
      .addCase(getMortyThunk.pending, (morty) => {
        //! todos los thunk devuelven la propiedad pending
        //! luego modifico mi paquete de datos asíncrono como yo
        morty.state = 'pending';
        morty.mortyData = null;
        morty.error = null;
      });
  }
});

//!obviamente exporto mi slice extendido con funcionalidades asíncronas.
export const mortyReducer = mortySlice.reducer;

//?.......................................................
//? Capitulo2: Componente = thunk.

//! importo la fn que me permite crear thunks
import { createAsyncThunk } from '@reduxjs/toolkit';

//! importo la accion asíncrona. La acción asíncrona debe devolver 2
import { getMorty } from '@/http';

export const getMortyThunk = createAsyncThunk(
  //!Le pongo un nombre a mi thunk, para verlo en reduxDevtools
  'morty/getMorty-Async',
  //!asingo una función asíncrona que devuelve mis datos o mi error
  async () => {
    const output = await getMorty();
    return output;
  }
);

//?.......................................................
//? Capitulo3:  petición o acción asíncrona.

//! si trabajo en ts necesito axios.
import axios from 'axios';
//! intefaz de los datos que voy a devolver
import { Morty } from '@/interfaces';

//! función asíncrona que devuelve una promesa, y esta devuelve el tipo
export const getMorty = async (): Promise<Morty | 'Error, Papi.'> => {
  try {
    let { data } = await axios.get<Morty>(
      'https://rickandmortyapi.com/api/character/2'
    );
    //!Devuelvo datos
    return data;
  } catch (error) {
    //! o devuelvo el error controlado.
    return 'Error, Papi.';
  }
};
