import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Faq from '../Faq/Faq';
import Loader from '../Loader/Loader';

import css from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <Header />
      <main className={css.layout}>
        <Suspense
          fallback={
            <div className={css.layoutLoader}>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Faq />
      <Footer />
    </div>
  );
}
