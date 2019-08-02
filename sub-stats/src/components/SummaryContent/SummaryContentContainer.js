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
            <Typography variant="h4" >Sate your curiousity about the curious</Typography>
            <br/>
            <Typography variant="h5" color="secondary">So, reddit.</Typography>
            <br/>
            
            <Typography variant="body1" > The "front page of the internet." Ever wondered about the relationship between different subs or the most active time of day for posting? We analyzed nine popular subreddits devoted to asking questions. </Typography>
            <br/>
            <Typography variant="h6" color="primary">To start, select the subreddit and date range you wish to see.</Typography>
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