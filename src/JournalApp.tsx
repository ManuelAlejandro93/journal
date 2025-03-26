import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/Router';

export function JournalApp() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
