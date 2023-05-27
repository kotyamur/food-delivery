// import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, ListWrapper, ShopLink, ShopList, Title } from './Shop.styled';

const Shop = () => {
  return (
    <Layout>
      <ListWrapper>
        <Title>Shops:</Title>
        <ShopList>
          <li>
            {/* <ShopLink to="mcdonalds">mcdonalds</ShopLink> */}
            <ShopLink to="/">
              mcdonalds
            </ShopLink>
          </li>
          <li>
            <ShopLink to="kfc">kfc</ShopLink>
          </li>
          <li>
            <ShopLink to="donermarket">donermarket</ShopLink>
          </li>
          <li>
            <ShopLink to="hesburger">hesburger</ShopLink>
          </li>
          <li>
            <ShopLink to="steakhouse">steakhouse</ShopLink>
          </li>
        </ShopList>
      </ListWrapper>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default Shop;
