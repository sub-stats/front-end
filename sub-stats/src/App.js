import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import useLocalStorage from './hooks/useLocalStorage';
import { register, login } from './views/onboarding-view/actions';

import LoggedIn from './components/LoggedIn';
import PrivateRoute from './components/PrivateRoute';
import Login from './views/onboarding-view/components/Login';
import Register from './views/onboarding-view/components/Register';
import NavTabs from './components/NavTabs';
import SummaryContentContainer from './components/SummaryContent/SummaryContentContainer';
import { MuiThemeProvider } from '@material-ui/core';
import { theme, darkTheme } from './theme';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import CompareContentContainer from './components/CompareContent/CompareContentContainer';
import { useDarkMode } from './hooks/useDarkMode';

const App = (props) => {
  const [currentSub, setCurrentSub] = useState({name: "AskReddit", description: `r/AskReddit is a subreddit for general questions. Questions can be silly, random, mundane, and serious, ranging from "How do you feel about ORANGE JUICE" to "What is the closest you've ever come to dying?" Answers are given from anyone who wishes to answer.`, topics: ["day life guy night time",
  "shrek man friend years s***",
  "people water food music f***",
  "person money year job time",
  "time people friends life game"]})
  // const [error, setError] = useState(props.error);
  const [darkMode, setDarkMode] = useDarkMode();

  const register = (credentials) => {
    props.register(credentials);
  }

  const login = (credentials) => {
    props.login(credentials);
  }
  
  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : theme}>
      <div className="App">       
          <LoggedIn exact path="/login" isLoggingIn={props.isLoggingIn} isLoading={props.isLoading} login={login} component={Login} />
          <LoggedIn exact path="/register" register={register} component={Register} />
          <PrivateRoute path="/dashboard" component={() => <Header darkMode={darkMode} setDarkMode={setDarkMode}/>} />
          <PrivateRoute path="/dashboard" component={NavTabs} />
        <div id="wrapper">
          <PrivateRoute path="/dashboard/compare" component={CompareContentContainer} />
          <PrivateRoute exact path="/dashboard" isLoading={props.isLoading} currentSub={currentSub} setCurrentSub={setCurrentSub} component={SummaryContentContainer} />
        </div>
        <PrivateRoute path="/dashboard" component={Footer} />
      </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    isRegistering: state.isRegistering,
    isLoggingIn: state.isLoggingIn,
    error: state.error
  }
}

export default connect(mapStateToProps, { register, login })(App);
