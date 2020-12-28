import React from 'react';
import { useState } from 'react';
import {
  RequestService,
  RequestMethod,
  AppRequest,
} from 'services/axios.service';

interface UseRequest {
  url: string;
  method: RequestMethod;
  body?: any;
  onSuccess?: (data: any) => {};
  baseURL?: string;
}

export const useRequest = ({
  url,
  method,
  body,
  onSuccess,
  baseURL,
}: UseRequest) => {
  const [errors, setErrors] = useState<JSX.Element | null>(null);

  const request = baseURL ? new RequestService(baseURL) : AppRequest;
  const execRequest = async () => {
    try {
      const res = await request[method](url, body);
      setErrors(null);

      if (onSuccess) {
        onSuccess(res.data);
      }

      return res.data;
    } catch (error) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops...</h4>
          <ul className="my-0">
            {error.response?.data?.errors?.map(error => {
              return <li key={error.message}>{error.message}</li>;
            })}
          </ul>
        </div>,
      );
    }
  };

  return { execRequest, errors };
};
