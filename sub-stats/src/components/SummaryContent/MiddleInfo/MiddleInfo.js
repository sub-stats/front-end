import React from 'react';
import { Typography, Box, Divider } from '@material-ui/core'

import PostActivity from './PostActivity';
import CommentActivity from './CommentActivity';
import CommentPerPost from './CommentPerPost';
import DayOfWeek from './DayOfWeek';
import HourOfDay from './HourOfDay';
import UniqueUsers from './UniqueUsers';
import styled from 'styled-components';
import BottomInfo from '../BottomInfo/BottomInfo';

const dashLoading = document.querySelector('._dash-loading');

function MiddleInfo ({currentSub, startDate, endDate}) {
    // console.log(dashLoading);

    const startYear = startDate.split('-')[0].split('').slice(2).join('');
    let reformattedStartDate = startDate.split('-').slice(1);
    reformattedStartDate.push(startYear);
    console.log('Start Date: ', reformattedStartDate.join('-'));

    const endYear = endDate.split('-')[0].split('').slice(2).join('');
    let reformattedEndDate = endDate.split('-').slice(1);
    reformattedEndDate.push(endYear);
    console.log('End Date: ', reformattedEndDate);

    const lowercaseCurrentSub = currentSub.name.toLowerCase();

    const StyledDiv = styled.div`
        margin-top: 20px;
        margin-bottom: 20px;
    `;

    return (
        <StyledDiv>
            <Typography variant="h5" color="secondary">What are the stats for {currentSub.name} over this period of time?</Typography>
            <br/>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                <Box width="48%">
                    <PostActivity
                        currentSub={lowercaseCurrentSub}
                        startDate={reformattedStartDate}
                        endDate={reformattedEndDate}
                        graphAPIURL={URL} />
                </Box>
                <Box width="48%">
                    <CommentActivity
                        currentSub={lowercaseCurrentSub}
                        startDate={reformattedStartDate}
                        endDate={reformattedEndDate}
                        graphAPIURL={URL} />
                </Box>
                <Box width="48%">
                    <CommentPerPost
                        currentSub={lowercaseCurrentSub}
                        startDate={reformattedStartDate}
                        endDate={reformattedEndDate}
                        graphAPIURL={URL} />
                </Box>
                <Box width="48%">
                <UniqueUsers
                    currentSub={lowercaseCurrentSub}
                    startDate={reformattedStartDate}
                    endDate={reformattedEndDate}
                    graphAPIURL={URL} />
                </Box>
            </Box>
            <BottomInfo currentSub={currentSub} startDate={startDate} endDate={endDate} />
            <br />
            <Divider />
            <br />
            <Typography variant="h5" color="secondary">What's a typical week like in {currentSub.name}?</Typography>
            <Typography variant="body1">We took a look at the typical posting times over a day and </Typography>
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
            <Typography>Curious reddit users tend to post around 5 to 8pm UTC, which is 10am to 1pm Lambda Time. The only exception is AskSocialScience, which tends to post the most around 7am Lambda Time. <br/><br/> AskSocialScience is also one of two subs that sees a high post count on Fridays. Most other subs are more popular on Tuesdays and Thursdays.</Typography>
        </StyledDiv>
        
    )
}

export default MiddleInfo;