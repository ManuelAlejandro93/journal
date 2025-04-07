import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '@/Auth';

export const LoginPage = () => {
  return (
    <AuthLayout authPageName='login'>
      {/* <form className='col-span-2 p-8 grid grid-cols-1 gap-4'>
        <TextField
          fullWidth
          placeholder='correo@gmail.com'
          label='correo'
          type='email'
        >
          Correo
        </TextField>
        <TextField
          fullWidth
          placeholder='amo-mis-perritos-1998'
          label='contraseña'
          type='password'
        >
          Contraseña
        </TextField>
      </form>
      <Button variant='contained'>Login</Button>
      <Button variant='contained'>
        <Google className='mr-2' />
        Google
      </Button>
      <RouterLink
        to={'/auth/register'}
        className={'mt-6 col-start-2'}
      >
        <Typography fontSize={'0.8rem'}>crear una cuenta</Typography>
      </RouterLink> */}

      <form className='p-8 grid space-y-4'>
        <TextField
          fullWidth
          placeholder='correo@gmail.com'
          label='correo'
          type='email'
        >
          Correo
        </TextField>
        <TextField
          fullWidth
          placeholder='amo-mis-perritos-1998'
          label='contraseña'
          type='password'
        >
          Contraseña
        </TextField>
        <div className='mt-4'>
          <Button
            variant='contained'
            fullWidth
          >
            Iniciar Sesión.
          </Button>
        </div>
      </form>
      <RouterLink
        to={'/auth/register'}
        className='text-right'
      >
        <Typography fontSize={'0.8rem'}>crear una cuenta</Typography>
      </RouterLink>
    </AuthLayout>
  );
};
