import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import TopInfo from './TopInfo/TopInfo';
import MiddleInfo from './MiddleInfo/MiddleInfo'

// const StyledContainer = styled(Container)`
//   display: flex;
//   flex-flow: column nowrap;
//   align-items: flex-start;
  
// `;

const fake = [
    {
        name: 'AskReddit',
        description: "Ask reddit some stuff, cool."
    }, 
    {
        name: "askscience",
        description: "Science is da bomb."
    }, 
    {
        name: "AskHistorians",
        description: "History is old and cool."
    }, 
    {
        name: "AskComputerScience",
        description: "Comp Sci, boooooi."
    }, 
    {
        name: "AskCulinary",
        description: "It's RAAAAW. Food is so great."
    }, 
    {
        name: "TrueAskReddit",
        description: "Ask reddit again, but for realsies."
    }, 
    {
        name: "AskSocialScience",
        description: "Social Science; It's like science, but more social."
    }, 
    {
        name: "AskEngineers",
        description: "Trust me, I'm an engineer."
    }, 
    {
        name: "askphilosophy",
        description: "What is the question to ask?"
    }
];

function SummaryContentContainer ({isLoading, currentSub, setCurrentSub}) {
    const today = new Date();
    const yesterday = new Date(new Date().setDate(today.getDate() - 1));
    const [startDate, setStartDate] = useState(yesterday.toLocaleDateString('en-CA'));
    const [endDate, setEndDate] = useState(today.toLocaleDateString('en-CA'));

    return (
        <>
        {isLoading ? <h1>Loading...</h1> :
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
                {/*fake.map(displayData => {
                    return (
                        <DataCard key={displayData.name} src="placeholder" />
                    )
                })*/}
                <MiddleInfo currentSub={currentSub} startDate={startDate} endDate={endDate} />
            </Box>
        }
        </>
    )
}

export default SummaryContentContainer