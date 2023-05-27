import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.main`
  display: flex;
  padding: 0 20px;
`;

export const ListWrapper = styled.div`
  flex-basis: 200px;
  padding: ${p => p.theme.space[5]}px;
  height: calc(100vh - 180px);
  height: 70vh;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.55) 1px 2px 9px 0px;
  border-radius: ${p => p.theme.radii.md};
`;

export const Title = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
`;
export const ShopList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const ShopLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  text-decoration: none;
  color: inherit;
  box-shadow: rgba(0, 0, 0, 0.55) 1px 2px 9px 0px;
  border-radius: ${p => p.theme.radii.md};
  &.active {
    color: ${p => p.theme.colors.orange};
  }

  :hover {
    text-decoration: underline;
  }
`;