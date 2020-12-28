import React, { useState } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import { PageWrapper } from './components/PageWrapper/PageWrapper';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { useRequest } from './hooks/useRequest';

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const { execRequest, errors } = useRequest({
    url: '/todos',
    method: 'get',
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  const [data, setData] = useState<Data[] | null>(null);
  return (
    <div className="App">
      <Navbar />
      <PageWrapper>
        <Input placeholder="Enter some text"></Input>
        <Button
          onClick={async () => {
            const data = await execRequest();
            setData(data);
          }}
        >
          Test
        </Button>
        <p>{errors}</p>

        {data && (
          <div>
            <ul>
              {data.map(todo =>
                todo.completed ? (
                  <li>
                    <s>{todo.title}</s>
                  </li>
                ) : (
                  <li>{todo.title}</li>
                ),
              )}
            </ul>
          </div>
        )}
      </PageWrapper>

      <GlobalStyle />
    </div>
  );
}

export default App;
