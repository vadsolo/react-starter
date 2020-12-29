import { RequestError, RequestStates } from './types';
import { useState, useEffect, useCallback } from 'react';
import { RequestService, AppRequest } from 'services/axios.service';

interface useApiState<T = any> {
  requestState: RequestStates;
  errors: RequestError[] | null;
  data: T | null;
}

function useApi<T = any>(endpoint: string, baseURL?: string) {
  const [data, setData] = useState<useApiState<T>>({
    requestState: RequestStates.LOADING,
    errors: null,
    data: null,
  });

  const setPartData = useCallback(
    (partialData: Partial<useApiState<T>>) =>
      setData(d => ({ ...d, ...partialData })),
    [],
  );

  useEffect(() => {
    const request = baseURL ? new RequestService(baseURL) : AppRequest;

    const fetchURL = async () => {
      setPartData({
        requestState: RequestStates.LOADING,
      });

      try {
        const res = await request.get(endpoint);
        setPartData({
          requestState: RequestStates.SUCCESS,
          data: res.data,
        });
      } catch (error) {
        setPartData({
          requestState: RequestStates.ERROR,
          errors: error.response?.data?.errors,
        });
      }
    };
    fetchURL();
  }, [baseURL, endpoint, setPartData]);

  return data;
}

export default useApi;
