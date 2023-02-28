import { ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../services/userService';
import { ApiClient } from '../../shared/apiClient/apiClient';
import NavigationBar from '../navigationBar/navigationBar';
import "./loginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleLoginButtonClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await logIn();
  }

  const logIn = async () => {
    const apiClient = new ApiClient();
    const userService = new UserService(apiClient);
    const token = await userService.logIn({ email, password });
    if (token) {
      window.localStorage.setItem('userEmail', email);
      navigate('/');
    }

  }

  return(
    <>
      <NavigationBar pageTitle='Sign In' />
      <form className='login-form-wrapper'>
        <label className='login-form-label' htmlFor="email">Email</label>
        <input className='login-form-input' id="email" name="email" autoComplete='email' type="email" onChange={handleEmailChange} />
        <label className='login-form-label' htmlFor="password">Password</label>
        <input className='login-form-input' id="password" name="password" autoComplete='current-password' type="password" onChange={handlePasswordChange} />
        <button className='login-form-button' onClick={handleLoginButtonClick}>Sign in</button>
      </form>
    </>
  );
}