import { useDispatch, useSelector } from 'react-redux';
import {
  LogoutOutlined,
  MenuOutlined,
  DeleteOutline
} from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';

// import { allCasesLogoutThunk } from '@/Store';
// import { allCasesLogoutThunk } from '../../Store/Slices/Auth/Thunks/LogoutThunk';
import { allCasesLogoutThunk, deleteNoteByIdThunk, RootState } from '@/Store/';
// import { drawerWidthSizePx } from '@/PseudoStore';
import { drawerWidthSizePx } from '../../PseudoStore/drawerWidth';

export const Navbar = () => {
  const dispatch = useDispatch();
  const uuid = useSelector((state: RootState) => state.authReducer.data?.uuid);
  const noteID = useSelector(
    (state: RootState) => state.journalReducer.activeNote?.noteId
  );
  const isFetching = useSelector(
    (state: RootState) => state.journalReducer.httpInfo.isFetching
  );
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
          {isFetching ? (
            <span className='text-red-500 mr-8'>Deleting note...</span>
          ) : (
            <div
              className='mr-8 text-red-500 flex items-center'
              onClick={() =>
                dispatch<any>(
                  deleteNoteByIdThunk({
                    uuid: uuid as string,
                    noteID: noteID as string
                  })
                )
              }
            >
              <DeleteOutline></DeleteOutline>
              Eliminar Nota
            </div>
          )}

          <IconButton onClick={() => dispatch<any>(allCasesLogoutThunk())}>
            <span className='text-white text-base mr-1'>Salir</span>
            <LogoutOutlined sx={{ color: 'white' }}></LogoutOutlined>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
