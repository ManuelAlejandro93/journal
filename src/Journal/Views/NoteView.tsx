import { Button, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
// import { ImageGallery } from '@/Journal';
import { ImageGallery } from '../Components/ImageGallery';
import { useNoteForm } from '@/Hooks';
import { updateSingleNoteByIDThunk } from '@/Store';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Store';

export const NoteView = () => {
  const {
    body,
    title,
    noteId,
    onBodyChange,
    onTitleChange,
    formattedDate,
    storeActiveNote,
    isFetching,
    imageInputElementRef
  } = useNoteForm();
  const dispatch = useDispatch();
  const uuid = useSelector((state: RootState) => state.authReducer.data?.uuid);

  return (
    <div className='w-full grid grid-cols-2 justify-evenly content-center gap-8 animate-fade-down'>
      <Typography sx={{ color: 'primary.main', textAlign: 'center' }}>
        {formattedDate}
      </Typography>
      <Button
        disabled={isFetching}
        variant='outlined'
        sx={{ color: 'primary.main' }}
        onClick={() =>
          dispatch<any>(
            updateSingleNoteByIDThunk({
              note: storeActiveNote,
              uuid: uuid as string
            })
          )
        }
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
          value={title}
          onChange={(e) => onTitleChange(e, noteId as string)}
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
          value={body}
          onChange={(e) => onBodyChange(e, noteId as string)}
        />
      </div>
      {/* //!start - componente de pruebas */}
      <input
        type='file'
        accept='image/*'
        name='file'
        ref={imageInputElementRef}
      />
      {/* //!end - componente de pruebas */}
      {/* <ImageGallery /> */}
    </div>
  );
};
//
