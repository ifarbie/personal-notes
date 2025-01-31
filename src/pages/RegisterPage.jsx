import React from 'react';
import RegisterForm from '../components/RegisterForm';
import localeData from '../utils/locale-data';
import LocaleContext from '../contexts/LocaleContext';

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <main className='note-app__body'>
      <h2>{localeData.registerParagraph[locale]}</h2>
      <RegisterForm />
    </main>
  );
}

RegisterPage.propTypes = {};

export default RegisterPage;
