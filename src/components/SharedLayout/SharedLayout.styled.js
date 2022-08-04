import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 10px;
  margin-bottom: 16px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.4);

  > nav {
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;

  &.active {
    color: orangered;
  }
`;
