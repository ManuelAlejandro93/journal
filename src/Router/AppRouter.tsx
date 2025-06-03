import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RootState } from '@/Store';

import { JournalRoutes } from '@/Journal';
import { AuthRoutes } from '@/Auth';
import { LSCheckingView } from '@/UI';
import { useLsUserHook } from '@/Hooks';

export const AppRouter = () => {
  const authDataState = useSelector(
    (state: RootState) => state.authReducer.data?.dataStatus
  );
  useLsUserHook();

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
      {authDataState === 'non-authenticated' || authDataState === 'checking' ? (
        <Route
          path='*'
          element={<AuthRoutes />}
        />
      ) : (
        ''
      )}
      {authDataState === 'local-storage-checking' ? (
        <Route
          path='*'
          element={<LSCheckingView></LSCheckingView>}
        />
      ) : (
        ''
      )}

      <Route />
    </Routes>
  );
};
