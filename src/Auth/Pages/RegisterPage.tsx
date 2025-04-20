import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, TextField, Typography, CircularProgress } from '@mui/material';

import { AuthLayout } from '@/Auth';
import { useRegisterForm } from '@/Hooks';
import { RootState } from '@/Store';

export const RegisterPage = () => {
  const {} = useRegisterForm();

  const authState = useSelector((state: RootState) => state.authReducer.state);

  return (
    <AuthLayout authPageName='regISter'>
      <form
        className='p-8 grid space-y-4'
        onSubmit={() => {
          /* Función encargada de manejar el submit */
        }}
      >
        <TextField
          fullWidth
          placeholder='tu nombre...'
          label='nombre'
          type='text'
          value={'controlador de valor'}
          onChange={() => {
            /* Función encargada de manejar el change  */
          }}
        >
          Nombre
        </TextField>
        <TextField
          fullWidth
          placeholder='correo@gmail.com'
          label='correo'
          type='email'
          value={'controlador de valor'}
          onChange={() => {
            /* Función encargada de manejar el change  */
          }}
        >
          Correo
        </TextField>
        <TextField
          fullWidth
          placeholder='amo-mis-perritos-1998'
          label='contraseña'
          type='password'
          value={'controlador de valor'}
          onChange={() => {
            /* Función encargada de manejar el change  */
          }}
        >
          Contraseña
        </TextField>

        {authState === 'pending' ? (
          ''
        ) : (
          <Button
            variant='contained'
            fullWidth
          >
            Crear cuenta
          </Button>
        )}

        {authState === 'pending' ? (
          <div className='flex justify-center'>
            <CircularProgress></CircularProgress>
          </div>
        ) : (
          <Button
            variant='contained'
            onClick={() => {}}
          >
            o Crear cuenta con Google
            <Google className='ml-2' />
          </Button>
        )}
      </form>
      <RouterLink
        to={'/auth/login'}
        className='text-right'
      >
        <Typography fontSize={'0.8rem'}>¿Ya tienes una cuenta?</Typography>
      </RouterLink>
    </AuthLayout>
  );
};
