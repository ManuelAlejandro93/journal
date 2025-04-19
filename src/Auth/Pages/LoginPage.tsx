import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

import { AuthLayout } from '@/Auth';
import { useLoginForm } from '@/Hooks';
import { Google } from '@mui/icons-material';

export const LoginPage = () => {
  const {
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onLoginFormSubmit,
    onGoogleLoginFormSubmit
  } = useLoginForm();

  return (
    <AuthLayout authPageName='login'>
      <form
        className='p-8 grid space-y-4'
        onSubmit={onLoginFormSubmit}
      >
        <TextField
          fullWidth
          placeholder='correo@gmail.com'
          label='correo'
          type='email'
          value={email}
          onChange={onEmailChange}
        >
          Correo
        </TextField>
        <TextField
          fullWidth
          placeholder='amo-mis-perritos-1998'
          label='contraseña'
          type='password'
          value={password}
          onChange={onPasswordChange}
        >
          Contraseña
        </TextField>

        <Button
          variant='contained'
          fullWidth
          type='submit'
        >
          Iniciar Sesión
        </Button>
        <Button
          variant='contained'
          onClick={onGoogleLoginFormSubmit}
        >
          Iniciar Sesion con Google
          <Google className='ml-2' />
        </Button>
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
