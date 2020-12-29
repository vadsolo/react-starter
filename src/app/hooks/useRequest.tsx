import { useState, useCallback } from 'react';
import {
  RequestService,
  RequestMethod,
  AppRequest,
} from 'services/request.service';
import { RequestError, RequestStates } from './types';

interface UseRequest {
  url: string;
  method: RequestMethod;
  body?: any;
  onSuccess?: (data: any) => {};
  baseURL?: string;
}

const useRequest = ({ url, method, body, onSuccess, baseURL }: UseRequest) => {
  const [errors, setErrors] = useState<RequestError[] | null>(null);
  const [requestState, setRequestState] = useState<RequestStates>(
    RequestStates.LOADING,
  );

  const execRequest = useCallback(async () => {
    const request = baseURL ? new RequestService(baseURL) : AppRequest;
    setRequestState(RequestStates.LOADING);
    try {
      const res = await request[method](url, body);
      setErrors(null);

      if (onSuccess) {
        onSuccess(res.data);
      }
      setRequestState(RequestStates.SUCCESS);
      return res.data;
    } catch (error) {
      setRequestState(RequestStates.ERROR);
      setErrors(error.response?.data?.errors);
    }
  }, [url, method, body, onSuccess, baseURL]);

  return { execRequest, errors, requestState };
};

export default useRequest;
