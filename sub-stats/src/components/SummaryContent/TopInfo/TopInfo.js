import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography } from '@material-ui/core';
import { Colors } from '../../Style-Colors';
import styled from 'styled-components';

import SelectSubreddit from './SelectSubreddit';
import DatePicker from './DatePicker';

const StyledCard = styled.div`
    background-color: ${Colors.primary.white};
    width: 90%;
    max-width: 80rem;
    margin: 1rem;
    display: flex;
    align-items: baseline;
    padding: 1rem;
`;

const StyledDivRow = styled.div`
    display: flex;
    align-items: baseline;
`;

const StyledDivColumn = styled.div`
    display: flex;
    flex-direction: column;

`;

const StyledTitle = styled.h1`
    color: ${Colors.secondary.mango};
    margin-right: -1rem;
`;


function TopInfo ({fake, currentSub, setCurrentSub, startDate, setStartDate, endDate, setEndDate}) {

    console.log(currentSub.description)
    return (
        <>
        <StyledCard>
        <StyledDivColumn>
            <StyledDivRow>
                <StyledDivRow>
                    <Typography variant="h4" color="secondary">r/</Typography>
                    <SelectSubreddit fake={fake} currentSub={currentSub} setCurrentSub={setCurrentSub} />
                </StyledDivRow>
                <DatePicker label="Start Date" date={startDate} setDate={setStartDate}></DatePicker>
            <DatePicker label="End Date" date={endDate} setDate={setEndDate}></DatePicker>
            </StyledDivRow>
            <br />
            <Typography variant="body1">{currentSub.description}</Typography>

            
            <br />
            
            {/*<Divider />
                <Button>Trending y/n ???</Button>
            <Typography variant="caption" color="textSecondary">This subreddit is currently trending! It has a larger than average userbase than other subreddits the same age, and it is growing more quickly.</Typography>*/}
        </StyledDivColumn>
            
        </StyledCard>
        <Divider />
        <br />
        </>
    )
}

export default TopInfo;