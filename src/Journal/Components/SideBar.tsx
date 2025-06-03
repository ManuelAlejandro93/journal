import { useSelector, useDispatch } from 'react-redux';
import { drawerWidthSizePx } from '@/PseudoStore';
// import { drawerWidthSizePx } from '../../PseudoStore/drawerWidth';
import { AddOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
  LinearProgress
} from '@mui/material';

import { addNewEmptyNoteThunk, getAllNotesThunk, RootState } from '@/Store';
import { SidebarSingleNoteItem } from '@/Journal';
import { useEffect } from 'react';

// const meses = ['Enero', 'Febrero'];

export const SideBar = () => {
  const userName = useSelector(
    (state: RootState) => state.authReducer.data?.displayName
  );

  const isFetching = useSelector(
    (state: RootState) => state.journalReducer.httpInfo.isFetching
  );
  const uuid = useSelector((state: RootState) => state.authReducer.data?.uuid);

  const notes = useSelector(
    (state: RootState) => state.journalReducer.allNotes
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAllNotesThunk(uuid as string));
  }, []);

  return (
    <Box
      component={'nav'}
      sx={{
        width: { sm: drawerWidthSizePx },
        flexShrink: { sm: 0 }
      }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidthSizePx
          }
        }}
      >
        <Toolbar>
          <Typography sx={{ color: 'primary.main' }}>{userName}</Typography>
        </Toolbar>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />

        {isFetching ? (
          <LinearProgress
            color='error'
            sx={{ height: 50, backgroundColor: 'primary.main' }}
          ></LinearProgress>
        ) : (
          <Button
            onClick={() => dispatch<any>(addNewEmptyNoteThunk(uuid!))}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              ':hover': {
                backgroundColor: 'secondary.main',
                opacity: 0.8
              }
            }}
          >
            Añadir Nueva Nota
            <AddOutlined sx={{ color: 'white', fontSize: 50 }}></AddOutlined>
          </Button>
        )}
        {isFetching ? (
          <Typography sx={{ color: 'primary.main', textAlign: 'center' }}>
            Sincronizando notas...
          </Typography>
        ) : (
          <List>
            {notes.length <= 0 ? (
              <Typography sx={{ color: 'primary.main', textAlign: 'center' }}>
                No hay notas escritas
              </Typography>
            ) : (
              notes.map((note) => (
                <SidebarSingleNoteItem
                  key={note.noteId}
                  {...note}
                />
              ))
            )}
          </List>
        )}
      </Drawer>
    </Box>
  );
};
