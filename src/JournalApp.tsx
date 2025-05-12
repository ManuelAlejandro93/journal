import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/Router';
import { AppTheme } from '@/Theme';
import { StoreProvider } from '@/Store';

export function JournalApp() {
  return (
    <StoreProvider>
      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>
    </StoreProvider>
  );
}
