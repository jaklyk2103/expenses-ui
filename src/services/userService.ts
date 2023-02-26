import axios, { AxiosInstance } from "axios";

type LogInPayload = {
  email: string;
  password: string;
}

export class UserService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL
    });
  }

  async logIn(payload: LogInPayload) {
    const response = await this.axiosInstance({
      method: 'POST',
      data: payload,
      url: '/login',
      withCredentials: true
    });
    console.log(`token: ${JSON.stringify(response.data)}`);

    return response.data;
  }
}