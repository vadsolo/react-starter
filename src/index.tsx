/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';

import store from './app/store/store';
// import reportWebVitals from './reportWebVitals';

// Default Styles Cross-Browser
import 'sanitize.css/sanitize.css';

import { ThemeProvider } from 'styles/theme/ThemeProvider';
import { StylesProvider } from '@material-ui/core/styles';

// Observe loading of Inter
const openSansObserver = new FontFaceObserver('Inter', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const render = () => {
  const App = require('./app/index').default;
  ReactDOM.render(
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ThemeProvider>
      </StylesProvider>
    </Provider>,

    MOUNT_NODE,
  );
};

render();
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/index', render);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
