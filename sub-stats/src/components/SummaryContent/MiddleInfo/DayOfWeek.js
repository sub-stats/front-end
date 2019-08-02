import React from 'react';

import { PrimaryCard, BgDiv } from '../../Style-Colors';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
  height: 29.5rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
  position: relative;
  top: -1rem;
`;

const StyledPrimaryCard = styled(PrimaryCard)`
    margin: 1rem 0;
    padding: 0;
    height: 29rem;
`;

function DayOfWeek ({currentSub, startDate, endDate}) {

    return (
        
        <StyledPrimaryCard className="day-item">
            <BgDiv>
                <StyledIframe id="iframe" src={`https://sub-stats-dash.herokuapp.com/day-of-week?subreddit=${currentSub}&start=${startDate.join('-')}&end=${endDate.join('-')}`}></StyledIframe>
            </BgDiv>
        </StyledPrimaryCard>
    )
}

export default DayOfWeek;