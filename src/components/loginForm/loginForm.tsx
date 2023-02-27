import { ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../services/userService';
import { ApiClient } from '../../shared/apiClient/apiClient';

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
    const token = await userService.logIn({ email: email, password });
    if (token) navigate('/');
  }

  return(
    <form>
      <label htmlFor="email">Email</label>
      <input name="email" autoComplete='email' type="email" onChange={handleEmailChange} placeholder='Email' />
      <label htmlFor="password">Password</label>
      <input name="password" autoComplete='current-password' type="password" onChange={handlePasswordChange} placeholder='Password' />
      <button onClick={handleLoginButtonClick}>Log in</button>
    </form>
  );
}