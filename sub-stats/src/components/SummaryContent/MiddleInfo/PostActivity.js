import React, { useEffect } from 'react';
import { Card } from '@material-ui/core';
import axios from 'axios';

import { Colors, PrimaryCard } from '../../Style-Colors'
import styled from 'styled-components'

const StyledIframe = styled.iframe`
  height: 29.5rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
`;

const StyledPrimaryCard = styled(PrimaryCard)`
    margin: 1rem 0;
`;
function PostActivity ({currentSub, startDate, endDate}) {
    // console.log("This is my current sub: ", props.currentSub.name);
    // console.log("This is my start date: ", props.startDate);
    // console.log("This is my end date: ", props.endDate);

    return (
        
        <StyledPrimaryCard>
            <StyledIframe id="iframe" src={`https://sub-stats-dash.herokuapp.com/submissions-per-day?subreddit=${currentSub}&start=${startDate.join('-')}&end=${endDate.join('-')}`}></StyledIframe>
        </StyledPrimaryCard>
    )
}

export default PostActivity;