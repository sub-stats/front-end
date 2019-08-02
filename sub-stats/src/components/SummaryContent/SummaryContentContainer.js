import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import TopInfo from './TopInfo/TopInfo';
import MiddleInfo from './MiddleInfo/MiddleInfo'
import { subArray as fake } from '../Data'


function SummaryContentContainer ({isLoggingIn, currentSub, setCurrentSub}) {
    const [startDate, setStartDate] = useState('2019-05-01');
    const [endDate, setEndDate] = useState('2019-07-31');

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