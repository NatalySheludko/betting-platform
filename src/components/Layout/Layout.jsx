import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from '../Header/Header';
import Loader from '../Loader/Loader';

export default function Layout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
