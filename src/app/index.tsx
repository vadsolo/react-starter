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
      <PageWrapper maxWidth="lg">
        <Input placeholder="Enter some text"></Input>
        <Button style={{ marginLeft: 10 }}>Submit</Button>

        <Button style={{ marginLeft: 10 }} warning>
          Cancel
        </Button>
        <Button style={{ marginLeft: 10 }} danger>
          Cancel
        </Button>
        <Button style={{ marginLeft: 10 }} success>
          Cancel
        </Button>
        <Button style={{ marginLeft: 10 }} outline>
          Submit
        </Button>

        <Button style={{ marginLeft: 10 }} warning outline>
          Cancel
        </Button>
        <Button style={{ marginLeft: 10 }} danger outline>
          Cancel
        </Button>
        <Button style={{ marginLeft: 10 }} success outline>
          Cancel
        </Button>
        <ExampleRequest />
        <ExampleAPI />
      </PageWrapper>

      <GlobalStyle />
    </div>
  );
}

export default App;
