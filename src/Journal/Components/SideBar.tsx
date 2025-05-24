import { useSelector, useDispatch } from 'react-redux';
// import { drawerWidthSizePx } from '@/PseudoStore';
import { drawerWidthSizePx } from '../../PseudoStore/drawerWidth';
import { AddOutlined, TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  LinearProgress
} from '@mui/material';

// import { RootState } from '@/Store';

import { addNewEmptyNoteThunk, RootState } from '@/Store';

export const SideBar = () => {
  const userName = useSelector(
    (state: RootState) => state.authReducer.data?.displayName
  );

  const isFetching = useSelector(
    (state: RootState) => state.journalReducer.httpInfo.isFetching
  );
  const uuid = useSelector((state: RootState) => state.authReducer.data?.uuid);

  const dispatch = useDispatch();
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

        <List>
          {['Enero', 'Febrero'].map((month) => (
            <ListItem
              key={month}
              sx={{ color: 'primary.main' }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <div>
                  <b>{month}</b>

                  <ListItemText>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </ListItemText>
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
