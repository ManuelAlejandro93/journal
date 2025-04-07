import { Grid, Typography } from '@mui/material';

interface Props {
  authPageName: string;
  children: React.ReactNode;
}

export const AuthLayout = ({ authPageName, children }: Props) => {
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
          <Typography fontSize={'2rem'}>
            {authPageName.toUpperCase()}
          </Typography>
        </div>
        {children}
      </div>
    </Grid>
  );
};
