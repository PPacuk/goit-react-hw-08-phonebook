import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/operations/auth';
import { selectAuthToken } from 'redux/selectors/auth';
import css from './RegisterPage.module.css'

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectAuthToken);
  useEffect(() => {
    if (token !== null) {
      navigate('/contacts');
    }
  }, [token, navigate]);

  const handleRegister = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div className={css.registerContainer}>
      <form onSubmit={handleRegister} className={css.registerForm}>
        <fieldset className={css.registerFieldset}>
          <legend>Sign In</legend>
          <div className={css.registerInputs}>
            <input
              className={css.registerInput}
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className={css.registerInput}
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className={css.registerInput}
              type="password"
              placeholder="Password"
              name="password"
            />
            <button className={css.registerBtn} type="submit">Sign In</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
