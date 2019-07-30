import React, { useState } from 'react';
import styled from 'styled-components';

import useLocalStorage from './hooks/useLocalStorage';

import LoggedIn from './components/LoggedIn';
import PrivateRoute from './components/PrivateRoute';
import Login from './views/onboarding-view/components/Login';
import NavTabs from './components/NavTabs';
import SummaryContentContainer from './components/SummaryContent/SummaryContentContainer';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import Header from './components/Header';

import './App.css';

function App() {
  const [currentSub, setCurrentSub] = useState({name: "Select a subreddit", description: "Subreddit description goes here!"})
  const [loggedIn, setLoggedIn] = useLocalStorage('token');

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <NavTabs></NavTabs>
        <SummaryContentContainer currentSub={currentSub} setCurrentSub={setCurrentSub}/>
        <LoggedIn exact path="/" setLoggedIn={setLoggedIn} component={Login} />

        <PrivateRoute exact path="/dashboard" component={NavTabs} />
        <PrivateRoute exact path="/dashboard" currentSub={currentSub} setCurrentSub={setCurrentSub} component={SummaryContentContainer} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
