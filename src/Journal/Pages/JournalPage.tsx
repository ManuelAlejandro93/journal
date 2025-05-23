import { useDispatch } from 'react-redux';
import { JournalLayout, NothingSelectedView, NoteView } from '@/Journal';
import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { addNewEmptyNoteThunk } from '@/Store';

export const JournalPage = () => {
  const dispatch = useDispatch();
  return (
    <JournalLayout>
      {/* <NoteView></NoteView> */}
      <NothingSelectedView></NothingSelectedView>
      <IconButton
        size='large'
        sx={{
          backgroundColor: 'secondary.main',
          position: 'fixed',
          right: 50,
          bottom: 60,
          width: 100,
          height: 100,
          ':hover': {
            backgroundColor: 'secondary.main',
            opacity: 0.8
          }
        }}
        onClick={() => dispatch<any>(addNewEmptyNoteThunk())}
      >
        <AddOutlined sx={{ color: 'white', fontSize: 50 }}></AddOutlined>
      </IconButton>
    </JournalLayout>
  );
};
