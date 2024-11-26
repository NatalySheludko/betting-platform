import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const BonusPage = lazy(() => import('./pages/BonusPage/BonusPage'));
const AppPage = lazy(() => import('./pages/AppPage/AppPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export default function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/bonus" element={<BonusPage />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>

        <Toaster />
      </div>
    </div>
  );
}
