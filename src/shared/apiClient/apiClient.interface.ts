import { AxiosRequestConfig } from "axios";

export interface IApiClient {
  requestApi(options: AxiosRequestConfig): Promise<any>;
}