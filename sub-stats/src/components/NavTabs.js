import React, { useState } from 'react';
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

export default function NavTabs() {
  const [tab, setTab] = useState(0); 

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
          <LinkTab label="Summary" to="/summary"></LinkTab>
          <LinkTab label="Compare" to="/compare"></LinkTab>
          <LinkTab onClick={() => {
            console.log("Logged out now, please come again!");
            localStorage.removeItem('token');
          }} label="Log Out" to="/"></LinkTab>
        </Tabs>
      </AppBar>
    </div>
  )
}