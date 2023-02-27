import { IApiClient } from "../shared/apiClient/apiClient.interface";

type LogInPayload = {
  email: string;
  password: string;
}

type LogOutPayload = {
  email: string;
}

export class UserService {
  private apiClient: IApiClient
  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  async logIn(payload: LogInPayload) {
     return this.apiClient.requestApi({
      method: 'POST',
      data: payload,
      url: '/login',
      withCredentials: true,
    });
  }

  async logOut(payload: LogOutPayload) {
    window.localStorage.removeItem('userEmail');

    return this.apiClient.requestApi({
      method: 'POST',
      data: payload,
      url: '/logout',
      withCredentials: true
    })
  }
}