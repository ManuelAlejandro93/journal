import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RootState } from '@/Store';

import { JournalRoutes } from '@/Journal';
import { AuthRoutes } from '@/Auth';
export const AppRouter = () => {
  const authDataState = useSelector(
    (state: RootState) => state.authReducer.data?.dataStatus
  );

  return (
    <Routes>
      {authDataState === 'authenticated' ? (
        <Route
          path='*'
          element={<JournalRoutes />}
        />
      ) : (
        ''
      )}
      {authDataState === 'non-authenticated' ? (
        <Route
          path='*'
          element={<AuthRoutes />}
        />
      ) : (
        ''
      )}
      {authDataState === 'checking' ? (
        <Route
          path='*'
          element={<h1>Revisando Autenticación.</h1>}
        />
      ) : (
        ''
      )}

      <Route />
    </Routes>
  );
};
