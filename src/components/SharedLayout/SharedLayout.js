import { Suspense } from 'react';
import { Header, Layout, Link } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <nav>
          <Link to="/" end>
            Shop
          </Link>
          <Link to="/cart"> Shopping Cart</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
