import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { login } from '../utils/network-data';
import localeData from '../utils/locale-data';
import LocaleContext from '../contexts/LocaleContext';

function LoginForm({ onLogin }) {
  const [password, passwordChangeHandler] = useInput();
  const [email, emailChangeHandler] = useInput();

  const { locale } = React.useContext(LocaleContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const { error, data } = await login({ email, password });
    if (!error) {
      onLogin(data);
      alert('Login success!');
    }
  };

  return (
    <form
      className='input-login'
      onSubmit={onSubmitHandler}
    >
      <label htmlFor='email'>Email</label>
      <input
        value={email}
        onChange={emailChangeHandler}
        type='email'
        name='email'
        id='email'
        required
      />
      <label htmlFor='password'>Password</label>
      <input
        value={password}
        onChange={passwordChangeHandler}
        type='password'
        name='password'
        id='password'
        required
      />
      <button type='submit'>{localeData.loginButton[locale]}</button>
      <p>
        {localeData.accountRegisterParagraph[locale]} <Link to='/register'>{localeData.accountRegisterLink[locale]}</Link>
      </p>
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
