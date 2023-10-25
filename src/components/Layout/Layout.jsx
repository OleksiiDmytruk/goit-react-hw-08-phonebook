import { Outlet } from 'react-router-dom';
import { Container, StyledLink, Nav, Header } from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Log in</StyledLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
