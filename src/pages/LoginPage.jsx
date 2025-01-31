import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

function LoginPage({ onLogin }) {
  return (
    <main className='note-app__body'>
      <h2>Login dulu yuk!</h2>
      <LoginForm onLogin={onLogin} />
    </main>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
