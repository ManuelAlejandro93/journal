import { useDispatch } from 'react-redux';
import {
  LogoutOutlined,
  MenuOutlined,
  DeleteOutline
} from '@mui/icons-material';
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

        <div className='w-full flex items-center justify-end'>
          <div className='mr-8 text-red-500 flex items-center'>
            <DeleteOutline></DeleteOutline>
            Eliminar Nota
          </div>
          <IconButton onClick={() => dispatch<any>(allCasesLogoutThunk())}>
            <span className='text-white text-base mr-1'>Salir</span>
            <LogoutOutlined sx={{ color: 'white' }}></LogoutOutlined>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
