import { Button, Grid, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <div className='grid shadow-2xl shadow-black grid-cols-2 rounded-md bg-white p-4 space-x-4'>
        <div className='col-span-2 text-center'>
          <Typography fontSize={'2rem'}>LOGIN</Typography>
        </div>
        <form className='col-span-2 p-8 grid grid-cols-1 gap-4'>
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
          <Google />
          oogle
        </Button>
        <RouterLink
          to={'/auth/register'}
          className={'mt-6 col-start-2'}
        >
          <Typography fontSize={'0.8rem'}>crear una cuenta</Typography>
        </RouterLink>
      </div>
    </Grid>
  );
};
