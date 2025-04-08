import { drawerWidthSizePx } from '@/PseudoStore';
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

export const SideBar = () => {
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
          <Typography sx={{ color: 'primary.main' }}>
            Manuel Alejandro
          </Typography>
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
