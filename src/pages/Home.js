import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redax/auth/selectors';

export const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h2>Hello. Welcome to the phone book. </h2>

      {isLoggedIn ? (
        <h3>Thank you for using our application</h3>
      ) : (
        <h3> To start work, register or log in</h3>
      )}
    </div>
  );
};

export default Home;
