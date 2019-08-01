import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { PrimaryCard } from '../Style-Colors';
import styled from 'styled-components';

const StyledPrimaryCard = styled(PrimaryCard)`
    margin-left: 0;
`;

const StyledIframe = styled.iframe`
  height: 29.5rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
`;

export default function CompareContentContainer() {
  return (
    <Box p={2} display="flex" justifyContent="flex-start" flexDirection="column">
      <Typography variant="h4" >Explore the relationship between subreddits</Typography>
      <Box p={2}>
        <Typography variant="h5" color="secondary">What is this?</Typography>
        <Typography>Below is a pruned network graph of the most similar post titles colored by subreddit. Those close together have a greater similarity. As expected, subreddits have overlap but clustering by subreddit occurs even at the dense core. (AskReddit not displayed for clarity of smaller subreddits)</Typography>
      </Box>
      <StyledPrimaryCard>
          <StyledIframe id="iframe" src="https://sub-stats-dash.herokuapp.com/subreddit-similarity"></StyledIframe>
      </StyledPrimaryCard>
    </Box>
  )
}