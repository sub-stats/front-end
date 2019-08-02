import React, { useState, useEffect } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { Link } from 'react-router-dom';

function LinkTab(props) {
  return (
    <Tab
      {...props}
      component={Link}
    >
    </Tab>
  )
}

export default function NavTabs(props) {
  const [tab, setTab] = useState("/dashboard"); 

  useEffect(() => {
    const path = props.location.pathname;
    path === "/register" ? setTab("/login") : setTab(path);
  }, [props.location.pathname]);

  const handleChange = (event, value) => {
      setTab(value);
  }

  return (
    <div>
      <AppBar position="static">
        <Tabs
          centered
          value={tab}
          onChange={handleChange}
          aria-label="navigation tabs"
        >
          <a href="https://bettersubstatshome.netlify.com/"><Tab label="Home"></Tab></a>
          <a href="https://bettersubstatshome.netlify.com/aboutus.html"><Tab label="About Us"></Tab></a>
          { tab === "/login" ? <></> :
            <>
            <LinkTab value="/dashboard" label="Summary" to="/dashboard"></LinkTab>
            <LinkTab value="/dashboard/compare" label="Compare" to="/dashboard/compare"></LinkTab>
            </>
          }
          <LinkTab onClick={() => {
            console.log("Logged out now, please come again!");
            localStorage.removeItem('token');
          }} value="/login" label={props.location.pathname === "/login" || props.location.pathname === "/register" ? "Log In" : "Log Out"} to="/login"></LinkTab>
        </Tabs>
      </AppBar>
    </div>
  )
}