import React from 'react';
import styled from 'styled-components'

import { PrimaryCard, BgDiv } from '../../Style-Colors';

const StyledIframe = styled.iframe`
  height: 29.5rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
  top: -1rem;
`;

const StyledPrimaryCard = styled(PrimaryCard)`
    margin: 1rem 0;
    padding: 0;
    height: 29rem;
`;
function PostActivity ({currentSub, startDate, endDate}) {

    return (
        
        <StyledPrimaryCard>
            <BgDiv>
                <StyledIframe id="iframe" src={`https://sub-stats-dash.herokuapp.com/submissions-per-day?subreddit=${currentSub}&start=${startDate.join('-')}&end=${endDate.join('-')}`}></StyledIframe>
            </BgDiv>
        </StyledPrimaryCard>
    )
}

export default PostActivity;