import { useSelector } from 'react-redux';
// import { drawerWidthSizePx } from '@/PseudoStore';
import { drawerWidthSizePx } from '../../PseudoStore/drawerWidth';
import { TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';

// import { RootState } from '@/Store';
import { RootState } from '../../Store/Store/Store';

export const SideBar = () => {
  const userName = useSelector(
    (state: RootState) => state.authReducer.data?.displayName
  );
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
