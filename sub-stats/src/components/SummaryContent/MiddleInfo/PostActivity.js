import React, { useEffect } from 'react';
import { Card } from '@material-ui/core';
import axios from 'axios';

import { Colors, PrimaryCard } from '../../Style-Colors'
import styled from 'styled-components'

const StyledIframe = styled.iframe`
  height: 39rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
`;
function PostActivity (props) {
    // console.log("This is my current sub: ", props.currentSub.name);
    // console.log("This is my start date: ", props.startDate);
    // console.log("This is my end date: ", props.endDate);

    return (
        
        <PrimaryCard>
            <StyledIframe src="https://sub-stats-dash.herokuapp.com/"></StyledIframe>
        </PrimaryCard>
    )
}

export default PostActivity;