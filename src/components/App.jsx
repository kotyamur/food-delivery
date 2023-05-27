import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Shop = lazy(() => import('../pages/Shop/Shop'));
const Cart = lazy(() => import('../pages/Cart/Cart'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Shop />}>
          <Route path="mcdonalds" element={<div>mcdonalds</div>} />
          <Route path="kfc" element={<div>kfc</div>} />
          <Route path="donermarket" element={<div>donermarket</div>} />
          <Route path="hesburger" element={<div>hesburger</div>} />
          <Route path="steakhouse" element={<div>steakhouse</div>} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
