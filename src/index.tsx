import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme } from './Theme';
import Animation from './Animation';


const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);





root.render(
  <ThemeProvider theme={darkTheme}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>
);

