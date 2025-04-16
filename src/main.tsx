import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { JournalApp } from './JournalApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JournalApp />
  </StrictMode>
);

//Empezando sección 19 capitulo 273
