import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logOut } from 'redux/operations/auth';
import { selectAuthToken, selectAuthUser } from 'redux/selectors/auth';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const token = useSelector(selectAuthToken);
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();
    console.log(user);
    
  return (
    <>
      <header className={css.headerContainer}>
        <img
          src="https://assets.dryicons.com/uploads/icon/svg/1512/phone_book.svg"
          width="50px"
          alt="Logo-phonebook"
        />
        <h2>Phonebook</h2>
        <nav className={css.navContainer}>
          {token ? (
            <>
              <Link to="/">Home</Link>
              <p>{user.name}</p>
              <button type="button" onClick={() => dispatch(logOut())}>
                Logout
              </button>
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
