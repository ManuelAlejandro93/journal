import { useDispatch, useSelector } from 'react-redux';
import { JournalLayout, NoteView, NothingSelectedView } from '@/Journal';
import { AddOutlined } from '@mui/icons-material';
import { CircularProgress, IconButton } from '@mui/material';
import { addNewEmptyNoteThunk, RootState } from '@/Store';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const uuid = useSelector((state: RootState) => state.authReducer.data?.uuid);
  const isFetching = useSelector(
    (state: RootState) => state.journalReducer.httpInfo.isFetching
  );

  const allNotes = useSelector(
    (state: RootState) => state.journalReducer.allNotes
  );

  return (
    <JournalLayout>
      {allNotes === null || allNotes!.length <= 0 || !allNotes ? (
        <NothingSelectedView></NothingSelectedView>
      ) : (
        <div>
          <NoteView></NoteView>

          {isFetching ? (
            <CircularProgress
              sx={{
                position: 'fixed',
                right: 50,
                bottom: 60,
                color: 'red'
              }}
              size={50}
            ></CircularProgress>
          ) : (
            <div className='w-full flex justify-end'>
              <IconButton
                size='large'
                sx={{
                  backgroundColor: 'secondary.main',
                  ':hover': {
                    backgroundColor: 'secondary.main',
                    opacity: 0.8
                  }
                }}
                onClick={() => dispatch<any>(addNewEmptyNoteThunk(uuid!))}
              >
                <AddOutlined
                  sx={{ color: 'white', fontSize: 50 }}
                ></AddOutlined>
              </IconButton>
            </div>
          )}
        </div>
      )}
    </JournalLayout>
  );
};
