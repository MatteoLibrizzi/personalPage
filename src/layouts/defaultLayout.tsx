import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const LayoutDefault = () => (
  <>
    <Header />
    <main className="site-content">
      <Outlet />
    </main>
	<Footer />
  </>
);

export default LayoutDefault;  