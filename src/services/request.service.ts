import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';

export class RequestService {
  private axios: AxiosInstance;
  constructor(baseURL: string) {
    this.axios = axios.create({
      baseURL,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  private handleSuccess(res: AxiosResponse) {
    return res;
  }

  private handleError(err: AxiosError) {
    switch (err.response?.status) {
      case 401:
        err.response.data.errors = [{ message: '401 Not Found' }];
        break;
      case 404:
        err.response.data.errors = [{ message: '404 Not Found' }];
        break;
      default:
        if (err.response) {
          err.response.data.errors = [{ message: 'Something Went Wrong' }];
        }
        break;
    }
    return Promise.reject(err);
  }

  private async makeRequest(config: AxiosRequestConfig) {
    try {
      const response = await this.axios.request(config);
      return this.handleSuccess(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  get(path: string) {
    return this.makeRequest({
      method: 'GET',
      url: path,
    });
  }

  delete(path: string) {
    return this.makeRequest({
      method: 'DELETE',
      url: path,
    });
  }

  put(path: string, body: any) {
    return this.makeRequest({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: body,
    });
  }

  post(path: string, body: any) {
    return this.makeRequest({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: body,
    });
  }
}

export const AppRequest = new RequestService('http://localhost:3000/');
export type RequestMethod = 'get' | 'delete' | 'put' | 'post';
