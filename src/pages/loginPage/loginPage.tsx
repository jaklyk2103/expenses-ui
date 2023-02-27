import { useEffect } from 'react';
import LoginForm from "../../components/loginForm/loginForm";
import { UserService } from '../../services/userService';
import { ApiClient } from '../../shared/apiClient/apiClient';

const sendLogOutRequest = async (email: string) => {
  const apiClient = new ApiClient();
  const userService = new UserService(apiClient);
  try {
    await userService.logOut({ email });
  } catch (error) {
  } finally {
    window.localStorage.removeItem('userEmail');  
  }
}

export default function LoginPage() {
  useEffect(() => {
    const userEmail = window.localStorage.getItem('userEmail') as string;
    if (userEmail) {
      sendLogOutRequest(userEmail);
    };
  }, []);

  return (
    <LoginForm />
  );
}