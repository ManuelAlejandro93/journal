import { AuthLayout } from '@/Auth';
import { Button, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <AuthLayout authPageName='regISter'>
      <form className='p-8 grid space-y-4'>
        <TextField
          fullWidth
          placeholder='tu nombre...'
          label='nombre'
          type='text'
        >
          Nombre
        </TextField>
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
            Crear cuenta
          </Button>
        </div>
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
