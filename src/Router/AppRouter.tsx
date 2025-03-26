import { Route, Routes } from 'react-router-dom';

import { JournalRoutes } from '@/Journal';
import { AuthRoutes } from '@/Auth';
export const AppRouter = () => {
  return (
    <Routes>
      {/* // Login y registro. */}
      <Route
        path='/auth/*'
        element={<AuthRoutes />}
      />
      {/* // Journal app. */}
      <Route
        path='/*'
        element={<JournalRoutes />}
      />
      <Route />
    </Routes>
  );
};
