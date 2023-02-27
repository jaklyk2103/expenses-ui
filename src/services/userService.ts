import { IApiClient } from "../shared/apiClient/apiClient.interface";

type LogInPayload = {
  email: string;
  password: string;
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
}