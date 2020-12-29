import React from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import { PageWrapper } from './components/PageWrapper/PageWrapper';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import ExampleRequest from './containers/ExampleRequest';
import ExampleAPI from './containers/ExampleAPI';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageWrapper>
        <Input placeholder="Enter some text"></Input>
        <Button>Test</Button>
        <ExampleRequest />
        <ExampleAPI />
      </PageWrapper>

      <GlobalStyle />
    </div>
  );
}

export default App;
