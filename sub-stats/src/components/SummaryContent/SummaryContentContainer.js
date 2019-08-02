import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import TopInfo from './TopInfo/TopInfo';
import MiddleInfo from './MiddleInfo/MiddleInfo'
import { subArray as fake } from '../Data'


function SummaryContentContainer ({isLoggingIn, currentSub, setCurrentSub}) {
    const today = new Date();
    const yesterday = new Date(new Date().setDate(today.getDate() - 1));
    const [startDate, setStartDate] = useState(yesterday.toLocaleDateString('en-CA'));
    const [endDate, setEndDate] = useState(today.toLocaleDateString('en-CA'));

    return (
        <>
        {isLoggingIn ? <h1>Loading...</h1> :
            <Box p={2} display="flex" justifyContent="flex-start" flexDirection="column">
            <Typography variant="h4" >Explore stats about a subreddit</Typography>
                <TopInfo 
                    fake={fake} 
                    currentSub={currentSub} 
                    setCurrentSub={setCurrentSub}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    />
                <MiddleInfo currentSub={currentSub} startDate={startDate} endDate={endDate} />
            </Box>
        }
        </>
    )
}

export default SummaryContentContainer