import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, TextField, Typography, CircularProgress } from '@mui/material';

import { AuthLayout } from '@/Auth';
import { useRegularLoginForm } from '@/Hooks';
import { RootState } from '@/Store';

export const LoginPage = () => {
  const {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onRegularLoginFormSubmit,
    onGoogleLoginFormSubmit,
    loginValidationState,
    isFormValid
  } = useRegularLoginForm();

  const {
    hasEmailError,
    emailErrorMessage,
    hasPasswordError,
    passwordErrorMessage
  } = loginValidationState;

  const authState = useSelector((state: RootState) => state.authReducer);

  return (
    <AuthLayout authPageName={`login`}>
      <div className='credentials-login-view'>
        <form
          className='p-8 grid space-y-4 items-center'
          onSubmit={onRegularLoginFormSubmit}
        >
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

          {authState.data?.dataStatus === 'checking' ? (
            ''
          ) : (
            <Button
              variant='contained'
              fullWidth
              type='submit'
            >
              Iniciar Sesión
            </Button>
          )}

          {authState.data?.dataStatus === 'checking' ? (
            <div className='flex justify-center'>
              <CircularProgress></CircularProgress>
            </div>
          ) : (
            <Button
              variant='contained'
              onClick={onGoogleLoginFormSubmit}
            >
              Iniciar Sesion con Google
              <Google className='ml-2' />
            </Button>
          )}
        </form>
        <RouterLink
          to={'/auth/register'}
          className='text-right'
        >
          <Typography fontSize={'0.8rem'}>crear una cuenta</Typography>
        </RouterLink>
      </div>
    </AuthLayout>
  );
};
