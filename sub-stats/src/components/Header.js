import React from 'react';
import { AppBar, Box, Typography } from '@material-ui/core';
import styled from 'styled-components'

const StyledAppBar = styled(AppBar)`
  position: relative;
  z-index: 2;
`;

export default function Header() {

  return (
    <div>
      <StyledAppBar color="inherit" position="static" id="headerImg">
        <Box p={2} display="flex" justifyContent="flex-start" id="title">
          <Typography variant="h4" id="title-text">
              Sub Stats
          </Typography>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Reddit_logo_orange.svg" id="headerimg"></img>
        </Box>
      </StyledAppBar>
    </div>
  )
}