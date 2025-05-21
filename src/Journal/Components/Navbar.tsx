import { useDispatch } from 'react-redux';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';

// import { allCasesLogoutThunk } from '@/Store';
import { allCasesLogoutThunk } from '../../Store/Slices/Auth/Thunks/LogoutThunk';
// import { drawerWidthSizePx } from '@/PseudoStore';
import { drawerWidthSizePx } from '../../PseudoStore/drawerWidth';

export const Navbar = () => {
  const dispatch = useDispatch();
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
          <IconButton onClick={() => dispatch<any>(allCasesLogoutThunk())}>
            <LogoutOutlined sx={{ color: 'white' }}></LogoutOutlined>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
