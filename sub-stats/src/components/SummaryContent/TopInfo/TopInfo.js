import React, { useEffect } from 'react';
import { Card, Button, Divider, Typography, Box } from '@material-ui/core';
import { Colors, InfoCard } from '../../Style-Colors';
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
    justify-content: center;
    padding: 1rem;
`;

const StyledDivRow = styled.div`
    display: flex;
    align-items: baseline;

`;

const StyledDivColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

        <StyledDivRow>
            <StyledDivColumn>

                <InfoCard>
                <StyledDivRow>
                    <Typography variant="h4" >r/</Typography>
                    <SelectSubreddit
                        fake={fake}
                        currentSub={currentSub}
                        setCurrentSub={setCurrentSub} />
                </StyledDivRow>
                
                <br />
                <br />

                <StyledDivRow>
                    <DatePicker label="Start Date" date={startDate} setDate={setStartDate}></DatePicker>
                    <DatePicker label="End Date" date={endDate} setDate={setEndDate}></DatePicker>
                </StyledDivRow>
                </InfoCard>
            </StyledDivColumn>
            
            <StyledDivColumn>
                <Box textAlign="left">
                <Typography variant="h5" color="secondary">About this subreddit</Typography>
                <Typography textAlign="left">{currentSub.description}</Typography></Box>
            </StyledDivColumn>
            
            <br />
            
            {/*<Divider />
                <Button>Trending y/n ???</Button>
            <Typography variant="caption" color="textSecondary">This subreddit is currently trending! It has a larger than average userbase than other subreddits the same age, and it is growing more quickly.</Typography>*/}
        </StyledDivRow>
            
        </StyledCard>
        <Divider />
        <br />
        </>
    )
}

export default TopInfo;