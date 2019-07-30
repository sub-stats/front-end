import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedIn = ({ component: Component, ...rest }) => (
      <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} {...rest} />
        )
      }
    />
  );

  export default LoggedIn;