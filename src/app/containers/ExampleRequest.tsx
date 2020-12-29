import React, { useState } from 'react';
import useRequest from '../hooks/useRequest';
import { RequestStates } from '../hooks/types';
interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Simple() {
  const { execRequest, errors, requestState } = useRequest({
    url: '/todos',
    method: 'get',
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  const [data, setData] = useState<Data[] | null>(null);

  React.useEffect(() => {
    const loadTodos = async () => {
      const resData = await execRequest();
      setData(resData);
    };

    loadTodos();
  }, [execRequest]);

  if (requestState === RequestStates.LOADING) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Example Use Request</h1>
      {requestState === RequestStates.ERROR && errors && (
        <ul>
          {errors.map(error => (
            <li key={error.message}>{error.message}</li>
          ))}
        </ul>
      )}
      {requestState === RequestStates.SUCCESS && data && (
        <ul>
          {data.slice(0, 20).map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Simple;
