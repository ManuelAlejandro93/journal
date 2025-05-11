import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, TextField, Typography, CircularProgress } from '@mui/material';

import { AuthLayout } from '@/Auth';
import { useRegisterForm } from '@/Hooks';
import { RootState } from '@/Store';

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onGoogleRegisterFormSubmit,
    onRegularRegisterFormSubmit,
    regularRegisterValidationState: {
      hasNameError,
      hasEmailError,
      hasPasswordError,
      nameErrorMessage,
      emailErrorMessage,
      passwordErrorMessage
    }
  } = useRegisterForm();

  const authState = useSelector((state: RootState) => state.authReducer);

  return (
    <AuthLayout authPageName='regISter'>
      <form
        className='p-8 grid space-y-4'
        onSubmit={onRegularRegisterFormSubmit}
      >
        <TextField
          fullWidth
          placeholder='tu nombre...'
          label='nombre'
          type='text'
          value={name}
          onChange={onNameChange}
          error={hasNameError}
          helperText={nameErrorMessage}
        >
          Nombre
        </TextField>
        <TextField
          fullWidth
          placeholder='correo@gmail.com'
          label='correo'
          type='email'
          value={email}
          onChange={onEmailChange}
          error={hasEmailError}
          helperText={emailErrorMessage}
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
          error={hasPasswordError}
          helperText={passwordErrorMessage}
        >
          Contraseña
        </TextField>

        {authState.state === 'rejected' ? (
          <span className='text-red-700'>
            Error Description:{' '}
            <i className='underline text-red-500'>{authState.errorMessage}</i>
          </span>
        ) : (
          ''
        )}

        {authState.state === 'pending' ? (
          ''
        ) : (
          <Button
            variant='contained'
            type='submit'
            fullWidth
          >
            Crear cuenta
          </Button>
        )}

        {authState.state === 'pending' ? (
          <div className='flex justify-center'>
            <CircularProgress></CircularProgress>
          </div>
        ) : (
          <Button
            variant='contained'
            onClick={onGoogleRegisterFormSubmit}
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
