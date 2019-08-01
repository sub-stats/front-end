import React, { useState } from 'react';
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
import theme from './theme';
import Header from './components/Header';

import './App.css';
import CompareContentContainer from './components/CompareContent/CompareContentContainer';

const App = (props) => {
  const [currentSub, setCurrentSub] = useState({name: "AskReddit", description: `r/AskReddit is a subreddit for general questions. Questions can be silly, random, mundane, and serious, ranging from "How do you feel about ORANGE JUICE" to "What is the closest you've ever come to dying?" Answers are given from anyone who wishes to answer.`})
  // const [error, setError] = useState(props.error);

  const register = (credentials) => {
    props.register(credentials);
  }

  const login = (credentials) => {
    props.login(credentials);
  }
  
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">       
          <LoggedIn exact path="/login" isLoading={props.isLoading} login={login} component={Login} />
          <LoggedIn exact path="/register" register={register} component={Register} />
          <PrivateRoute path="/dashboard" component={Header} />
          <PrivateRoute path="/dashboard" component={NavTabs} />
        <div id="wrapper">
          <PrivateRoute path="/dashboard/compare" component={CompareContentContainer} />
          <PrivateRoute exact path="/dashboard" isLoading={props.isLoading} currentSub={currentSub} setCurrentSub={setCurrentSub} component={SummaryContentContainer} />
        </div>
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
