import React from 'react';
import { Typography, Box } from '@material-ui/core'

import PostActivity from './PostActivity';
import CommentActivity from './CommentActivity';
import CommentPerPost from './CommentPerPost';
import DayOfWeek from './DayOfWeek';
import HourOfDay from './HourOfDay';
import UniqueUsers from './UniqueUsers';
import styled from 'styled-components';

function MiddleInfo ({currentSub, startDate, endDate}) {

    const startYear = startDate.split('-')[0].split('').slice(2).join('');
    let reformattedStartDate = startDate.split('-').slice(1);
    reformattedStartDate.push(startYear);

    const endYear = endDate.split('-')[0].split('').slice(2).join('');
    let reformattedEndDate = endDate.split('-').slice(1);
    reformattedEndDate.push(endYear);

    const lowercaseCurrentSub = currentSub.name.toLowerCase();

    const StyledDiv = styled.div`
        margin-top: 20px;
        margin-bottom: 20px;
    `;

    return (
        <StyledDiv>
            <Typography variant="h5" color="secondary">What are the stats for {currentSub.name} over this period of time?</Typography>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                <Box width="45%">
                    <PostActivity
                        currentSub={lowercaseCurrentSub}
                        startDate={reformattedStartDate}
                        endDate={reformattedEndDate}
                        graphAPIURL={URL} />
                </Box>
                <Box width="45%">
                    <CommentActivity
                        currentSub={lowercaseCurrentSub}
                        startDate={reformattedStartDate}
                        endDate={reformattedEndDate}
                        graphAPIURL={URL} />
                </Box>
                <Box width="45%">
                    <CommentPerPost
                        currentSub={lowercaseCurrentSub}
                        startDate={reformattedStartDate}
                        endDate={reformattedEndDate}
                        graphAPIURL={URL} />
                </Box>
                <Box width="45%">
                <UniqueUsers
                    currentSub={lowercaseCurrentSub}
                    startDate={reformattedStartDate}
                    endDate={reformattedEndDate}
                    graphAPIURL={URL} />
                </Box>
            </Box>
            <div className="day-wrapper">
                <DayOfWeek
                    currentSub={lowercaseCurrentSub}
                    startDate={reformattedStartDate}
                    endDate={reformattedEndDate}
                    graphAPIURL={URL} />
                <HourOfDay
                    currentSub={lowercaseCurrentSub}
                    startDate={reformattedStartDate}
                    endDate={reformattedEndDate}
                    graphAPIURL={URL} />
            </div>    
        </StyledDiv>
        
    )
}

export default MiddleInfo;