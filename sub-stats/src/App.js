import React, { useState } from 'react';

import useLocalStorage from './hooks/useLocalStorage';

import LoggedIn from './components/LoggedIn';
import PrivateRoute from './components/PrivateRoute';
import Login from './views/onboarding-view/components/Login';
import Register from './views/onboarding-view/components/Register';
import NavTabs from './components/NavTabs';
import SummaryContentContainer from './components/SummaryContent/SummaryContentContainer';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import Header from './components/Header';

import './App.css';
import CompareContentContainer from './components/CompareContent/CompareContentContainer';

function App() {
  const [currentSub, setCurrentSub] = useState({name: "Select a subreddit", description: ""})
  const [loggedIn, setLoggedIn] = useLocalStorage('token');

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <LoggedIn exact path="/login" setLoggedIn={setLoggedIn} component={Login} loggedIn={loggedIn} />
        <LoggedIn exact path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Header} />
        <PrivateRoute path="/dashboard" component={NavTabs} /> 
        <PrivateRoute path="/dashboard/compare" component={CompareContentContainer} />
        <PrivateRoute exact path="/dashboard" currentSub={currentSub} setCurrentSub={setCurrentSub} component={SummaryContentContainer} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
