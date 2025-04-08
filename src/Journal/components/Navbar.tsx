import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';

import { drawerWidthSizePx } from '@/PseudoStore';

export const Navbar = () => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidthSizePx}px)` },
        ml: { sm: `${drawerWidthSizePx}px` }
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          sx={{ display: { sm: 'none' } }}
        >
          <MenuOutlined></MenuOutlined>
        </IconButton>

        <div className='w-full flex justify-between items-center'>
          <p>opcion n</p>
          <p>opcion n</p>
          <p>opcion n</p>
          <p>opcion n</p>
          <IconButton>
            <LogoutOutlined sx={{ color: 'white' }}></LogoutOutlined>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
