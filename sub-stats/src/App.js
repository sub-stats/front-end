import React, { useState } from 'react';
import { connect } from 'react-redux';

import useLocalStorage from './hooks/useLocalStorage';
import { register } from './views/onboarding-view/actions';

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
  const [currentSub, setCurrentSub] = useState({name: "Select a subreddit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})
  const [loggedIn, setLoggedIn] = useLocalStorage('token');

  const register = (credentials) => {
    props.register(credentials);
  }
  
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <LoggedIn exact path="/login" isLoading={props.isLoading} setLoggedIn={setLoggedIn} loggedIn={loggedIn} component={Login} />
        <LoggedIn exact path="/register" register={register} component={Register} />
        <PrivateRoute path="/dashboard" component={Header} />
        <PrivateRoute path="/dashboard" component={NavTabs} /> 
        <PrivateRoute path="/dashboard/compare" component={CompareContentContainer} />
        <PrivateRoute exact path="/dashboard" isLoading={props.isLoading} currentSub={currentSub} setCurrentSub={setCurrentSub} component={SummaryContentContainer} />
      </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { register })(App);
