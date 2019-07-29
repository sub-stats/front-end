import React from 'react';

import PrivateRoute from './components/PrivateRoute';
import LoggedIn from './components/LoggedIn';
import Login from '../src/views/onboarding-view/components/Login';
import Dashboard from '../src/views/dashboard-view/components/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useLocalStorage('token');

  return (
    <div className="App">
      <LoggedIn exact path="/" loggedIn={loggedIn} setLoggedIn={setLoggedIn} component={Login} />
      <PrivateRoute exact path="/dashboard" setLoggedIn={setLoggedIn} component={Dashboard} />
    </div>
  );
}

export default App;
