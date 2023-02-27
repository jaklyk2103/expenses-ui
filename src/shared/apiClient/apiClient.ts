import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IApiClient } from "./apiClient.interface";
import { history } from "../../components/customRouter/history";

export class ApiClient implements IApiClient {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3003',
      withCredentials: true
    });
  }

  async requestApi(options: AxiosRequestConfig): Promise<any> {
    try {
      const result = await this.axios(options);
      return result.data;
    } catch (error: any) {
      if (error?.response?.status === 401) {
        history.push('/login');
      }
    }
  }
}