import React from 'react';
import { AppBar, Box, Typography } from '@material-ui/core';
import { WbSunny } from '@material-ui/icons';
import styled from 'styled-components'

const StyledAppBar = styled(AppBar)`
  position: relative;
  z-index: 2;
`;

const ToggleIcon = styled(WbSunny)`
  cursor: pointer;
`;

export default function Header({ darkMode, setDarkMode }) {

  const handleClick = () => {
    console.log('clicked dark mode');
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <StyledAppBar color="inherit" position="static" id="headerImg">
        
        <Box p={2} display="flex" justifyContent="flex-start" id="title">
          <Typography variant="h4" id="title-text">
              Better Sub Stats
          </Typography>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Reddit_logo_orange.svg" id="headerimg" alt="reddit logo"></img>
        </Box>
      </StyledAppBar>
    </div>
  )
}