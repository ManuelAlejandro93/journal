import { Route, Routes } from 'react-router-dom';

import { JournalRoutes } from '@/Journal';
export const AppRouter = () => {
  return (
    <Routes>
      {/* // Login y registro. */}
      <Route
        path='/auth/*'
        element={<JournalRoutes />}
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
