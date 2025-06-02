import { Button, TextField, Typography } from '@mui/material';
import { SaveOutlined, CloudUploadOutlined } from '@mui/icons-material';
import { useNoteForm } from '@/Hooks';
import { SubmitEvent } from '@/Interfaces';
import { ImageGallery } from '@/Journal';

export const NoteView = () => {
  const {
    //! listos.
    formattedDate,
    body,
    title,
    //! dañados.
    noteId,
    updatedImgUrls,
    onBodyChange,
    onTitleChange,
    isFetching,
    imageInputElementRef,
    fullUpdateSingleNote
  } = useNoteForm();

  return (
    <div className='grid grid-cols-2 gap-8 animate-fade-down'>
      <Typography sx={{ color: 'primary.main', textAlign: 'center' }}>
        {formattedDate}
      </Typography>
      <Button
        disabled={isFetching}
        variant='outlined'
        sx={{ color: 'primary.main' }}
        type='submit'
        onClick={(e) => fullUpdateSingleNote(e as unknown as SubmitEvent)}
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

      <label
        className='flex items-center justify-center col-span-2'
        htmlFor='imginput'
      >
        <input
          id='imginput'
          type='file'
          accept='image/*'
          multiple
          ref={imageInputElementRef}
          disabled={isFetching}
          style={{ display: 'none' }}
        />
        <CloudUploadOutlined
          className='mr-2'
          sx={{ color: 'primary.main', fontSize: '2rem' }}
        />
        <Typography sx={{ color: 'primary.main' }}>Subir imágenes</Typography>
      </label>

      {updatedImgUrls.length <= 0 ? (
        <Typography
          className='col-span-2'
          sx={{ color: 'primary.main' }}
        >
          Sin imágenes guardadas
        </Typography>
      ) : (
        <>
          <span className='col-span-2'>
            <ol>
              {updatedImgUrls.map((img, i) => (
                <li key={img + i}>{img}</li>
              ))}
            </ol>
          </span>

          <ImageGallery />
        </>
      )}
    </div>
  );
};
//
