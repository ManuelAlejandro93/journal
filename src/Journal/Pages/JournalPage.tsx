import { useDispatch, useSelector } from 'react-redux';
import { JournalLayout, NoteView, NothingSelectedView } from '@/Journal';
import { AddOutlined } from '@mui/icons-material';
import { IconButton, CircularProgress } from '@mui/material';
import { addNewEmptyNoteThunk, RootState } from '@/Store';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const uuid = useSelector((state: RootState) => state.authReducer.data?.uuid);
  const isFetching = useSelector(
    (state: RootState) => state.journalReducer.httpInfo.isFetching
  );
  const isThereActiveNote = useSelector(
    (state: RootState) => state.journalReducer.isThereActiveNote
  );
  return (
    <JournalLayout>
      {isThereActiveNote ? (
        <>
          <NoteView></NoteView>
        </>
      ) : (
        <>
          <NothingSelectedView></NothingSelectedView>
          {isFetching ? (
            <CircularProgress
              sx={{
                position: 'fixed',
                right: 50,
                bottom: 60
              }}
              color='error'
            ></CircularProgress>
          ) : (
            <>
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
                onClick={() => dispatch<any>(addNewEmptyNoteThunk(uuid!))}
                disabled={isFetching}
              >
                <AddOutlined
                  sx={{ color: 'white', fontSize: 50 }}
                ></AddOutlined>
              </IconButton>
            </>
          )}
        </>
      )}
    </JournalLayout>
  );
};
