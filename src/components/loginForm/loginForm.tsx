import { ChangeEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../services/userService';

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
    const userService = new UserService();
    const token = await userService.logIn({ email: email, password });
    if (token) navigate('/');
  }

  return(
    <form>
      <input type="email" onChange={handleEmailChange} placeholder='Email' />
      <input type="text" onChange={handlePasswordChange} placeholder='Password' />
      <button onClick={handleLoginButtonClick}>Log in</button>
    </form>
  );
}