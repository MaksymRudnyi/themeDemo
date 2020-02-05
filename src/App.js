import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


import {ThemeProvider} from 'styled-components';
import {getTheme} from "./getTheme";
import THEMES from './constants/themes'
import { Header, AppLink } from './styles';

function App() {
  const [themeName, setThemeName] = useState(THEMES.BASIC);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <div className="App">
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>

          <button onClick={() => setThemeName(THEMES.APPLE)}>Apple</button>
          <button onClick={() => setThemeName(THEMES.DARCULA)}>Darcula</button>
        </Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
