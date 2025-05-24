import { Button, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
// import { ImageGallery } from '@/Journal';
import { ImageGallery } from '../Components/ImageGallery';

export const NoteView = () => {
  return (
    <div className='w-full grid grid-cols-2 justify-evenly content-center gap-8 animate-fade-down'>
      <Typography sx={{ color: 'primary.main', textAlign: 'center' }}>
        28 de agosto de 2023
      </Typography>
      <Button
        variant='outlined'
        sx={{ color: 'primary.main' }}
      >
        <SaveOutlined sx={{ mr: 2 }}></SaveOutlined>
        Guardar
      </Button>
      <div className='w-full col-span-2 grid space-y-6'>
        <TextField
          sx={{ color: 'primary.main' }}
          fullWidth
          placeholder='Ingresa un nuevo título'
          type='text'
          label='titulo'
          variant='filled'
        />
        <TextField
          sx={{ color: 'primary.main', gridRow: 2 }}
          fullWidth
          placeholder='Escribe aquí tu nueva nota'
          type='text'
          label='Texto de la nota'
          variant='filled'
          multiline
          minRows={3}
        />
      </div>
      <ImageGallery />
    </div>
  );
};
