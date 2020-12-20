import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>srsc/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GlobalStyle />
    </div>
  );
}

export default App;
