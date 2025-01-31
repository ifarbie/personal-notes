import React from 'react';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  return (
    <main className='note-app__body'>
      <h2>Isi form-nya ya untuk daftar akun!</h2>
      <RegisterForm />
    </main>
  );
}

RegisterPage.propTypes = {};

export default RegisterPage;
