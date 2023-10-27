import { Outlet } from 'react-router-dom';
import { Container, StyledLink, Nav, Header } from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redax/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          {isLoggedIn ? (
            <>
              <StyledLink to="/cotacts">Cotacts</StyledLink> <UserMenu />
            </>
          ) : (
            <>
              <StyledLink to="/register">Register</StyledLink>
              <StyledLink to="/login">Log in</StyledLink>
            </>
          )}
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
