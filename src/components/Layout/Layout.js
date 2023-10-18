import { Header } from '../Header/Header';

import { Suspense } from 'react';

import { Loader } from '../Loader/Loader';

import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
