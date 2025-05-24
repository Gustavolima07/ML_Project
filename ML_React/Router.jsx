import { Route, Routes } from 'react-router';

import { LayoutPadrao } from './src/Layouts';
import { Erro } from './src/Pages'


const Router = () => {
  return (
      <Routes>
          <Route path="/" element={<LayoutPadrao />}>
          <Route path="*" element={<Erro />} />
        </Route>
    </Routes>
  );
}

export { Router };