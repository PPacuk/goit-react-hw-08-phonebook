import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/operations/auth';
import { selectAuthToken } from 'redux/selectors/auth';
import css from './LoginPage.module.css';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectAuthToken);
  useEffect(() => {
    if (token !== null) {
      navigate('/contacts');
    }
  }, [token, navigate]);

  const handleLogin = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.loginContainer}>
      <form onSubmit={handleLogin} className={css.loginForm}>
        <fieldset className={css.loginFieldset}>
          <legend>Log In</legend>
          <div className={css.loginInputs}>
            <input
              className={css.loginInput}
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className={css.loginInput}
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <button type="submit" className={css.loginBtn}>
              Log In
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
