import React from 'react';
import useApi from '../hooks/useApi';
import { RequestStates } from '../hooks/types';
interface APIData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Simple() {
  const { data, errors, requestState } = useApi<APIData>(
    '/todos/1',
    'https://jsonplaceholder.typicode.com',
  );

  if (requestState === RequestStates.LOADING) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Example Use API</h1>
      {requestState === RequestStates.ERROR && errors && (
        <ul>
          {errors.map(error => (
            <li key={error.message}>{error.message}</li>
          ))}
        </ul>
      )}
      {requestState === RequestStates.SUCCESS && data && (
        <ul>
          <li key={data.id}>{data.title}</li>
        </ul>
      )}
    </div>
  );
}

export default Simple;
