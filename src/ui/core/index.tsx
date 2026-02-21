import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import RootRouter from 'ui/core/RootRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RootRouter />
  </BrowserRouter>,
);
