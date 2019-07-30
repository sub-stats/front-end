import React from 'react';
import { AppBar, Box, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

export default function Header() {

  return (
    <div>
      <AppBar color="inherit" position="static">
        <Box p={2} display="flex" justifyContent="flex-start">
          <Typography variant="h6">
              Better Subreddit Stats
          </Typography>
        </Box>
      </AppBar>
    </div>
  )
}