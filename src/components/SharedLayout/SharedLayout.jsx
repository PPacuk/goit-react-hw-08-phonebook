import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logOut } from 'redux/operations/auth';
import { selectAuthToken } from 'redux/selectors/auth';

export const SharedLayout = () => {
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  

  return (
    <>
      <header>
        <nav>
          {token ? (
            <>
              <Link to="/">Home</Link>
              <button onClick={() => dispatch(logOut())}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/login">LogIn</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>

      <Outlet />
    </>
  );
};
