import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/Router';
import { AppTheme } from '@/Theme';
import { StoreProvider } from '@/Store';

export function JournalApp() {
  useEffect(() => {
    //todo: buscar en ls.
    //todo: cambiar sincronamente el estado de mi auth state
    //todo: en función de si hay o no hay algo en LS.
  }, []);

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
