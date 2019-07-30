import React, { useState } from 'react';
import './App.css';

import styled from 'styled-components';

import NavTabs from './components/NavTabs';
import SummaryContentContainer from './components/SummaryContent/SummaryContentContainer';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import Header from './components/Header';


function App() {
  const [currentSub, setCurrentSub] = useState({name: "Select a subreddit", description: "Subreddit description goes here!"})

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <NavTabs></NavTabs>
        <SummaryContentContainer currentSub={currentSub} setCurrentSub={setCurrentSub}/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
