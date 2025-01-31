import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import localeData from '../utils/locale-data';
import LocaleContext from '../contexts/LocaleContext';

function LoginPage({ onLogin }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <main className='note-app__body'>
      <h2>{localeData.loginParagraph[locale]}</h2>
      <LoginForm onLogin={onLogin} />
    </main>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
