import React, { useState, useEffect } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
background-image: linear-gradient(120deg, #0DD3BB, #24A0ED 90%);
`;

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
    setTab(props.location.pathname);
  }, [props.location.pathname]);

  const handleChange = (event, value) => {
      setTab(value);
  }

  return (
    <div>
      <StyledAppBar position="static">
        <Tabs
          centered
          value={tab}
          onChange={handleChange}
          aria-label="navigation tabs"
        >
          <LinkTab value="/dashboard" label="Summary" to="/dashboard"></LinkTab>
          <LinkTab value="/dashboard/compare" label="Compare" to="/dashboard/compare"></LinkTab>
          <LinkTab onClick={() => {
            console.log("Logged out now, please come again!");
            localStorage.removeItem('token');
          }} label="Log Out" to="/login"></LinkTab>
        </Tabs>
      </StyledAppBar>
    </div>
  )
}