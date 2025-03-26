import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/Router';
import { AppTheme } from '@/Theme';

export function JournalApp() {
  return (
    <>
      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>
    </>
  );
}
