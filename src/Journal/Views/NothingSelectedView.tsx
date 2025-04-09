import { BorderColorOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        minHeight: '80vh',
        width: '74vw',
        backgroundColor: 'primary.main',
        padding: 4
      }}
    >
      <BorderColorOutlined sx={{ color: 'white', fontSize: 120 }} />
      <h2 className='text-white text-2xl mt-4'>Crear una nueva nota</h2>
    </Grid>
  );
};
