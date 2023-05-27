import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const Shop = () => {
  return (
    <div>
      <div>Shop</div>
      <ul>
        <li>
          <Link to="mcdonalds">mcdonalds</Link>
        </li>
        <li>
          <Link to="kfc">kfc</Link>
        </li>
        <li>
          <Link to="donermarket">donermarket</Link>
        </li>
        <li>
          <Link to="hesburger">hesburger</Link>
        </li>
        <li>
          <Link to="steakhouse">steakhouse</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Shop;
