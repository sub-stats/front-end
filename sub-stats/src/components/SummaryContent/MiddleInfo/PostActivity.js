import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

import { Colors, PrimaryCard } from '../../Style-Colors'

const StyledIframe = styled.iframe`
  height: 39rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
`;

function PostActivity () {
    return (
        
        <PrimaryCard>
            <StyledIframe src="https://sub-stats-dash.herokuapp.com/"></StyledIframe>
        </PrimaryCard>
    )
}

export default PostActivity;