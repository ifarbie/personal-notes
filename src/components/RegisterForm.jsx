import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from './InputField';
import useInput from '../hooks/useInput';
import { register } from '../utils/network-data';

function RegisterForm() {
  const [name, nameChangeHandler] = useInput();
  const [email, emailChangeHandler] = useInput();
  const [password, passwordChangeHandler] = useInput();
  const [confirmPassword, confirmPasswordChangeHandler] = useInput();
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (password.length < 6) {
      return alert('Password minimal 6 karakter!');
    }
    if (password !== confirmPassword) {
      return alert('Password dan confirm password harus sama!');
    }

    const { error } = await register({ name, email, password });
    if (!error) {
      alert('Register success!');
      navigate('/');
    }
  };

  return (
    <form
      className='input-register'
      onSubmit={onSubmitHandler}
    >
      <InputField
        label='Name'
        type='text'
        name='name'
        value={name}
        onChange={nameChangeHandler}
      />
      <InputField
        label='Email'
        type='email'
        name='email'
        value={email}
        onChange={emailChangeHandler}
      />
      <InputField
        label='Password'
        type='password'
        name='password'
        value={password}
        onChange={passwordChangeHandler}
      />
      <InputField
        label='Confirm Password'
        type='password'
        name='confirm_password'
        value={confirmPassword}
        onChange={confirmPasswordChangeHandler}
      />
      <button type='submit'>Register</button>
      <p>
        Sudah punya akun? <Link to='/'>Login di sini</Link>
      </p>
    </form>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
