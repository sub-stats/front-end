import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

import TopInfo from './TopInfo/TopInfo';
import MiddleInfo from './MiddleInfo/MiddleInfo'
import BottomInfo from './BottomInfo/BottomInfo'

const fake = [{
    name: 'AskReddit',
    description: "AskReddit description here!!!!"
}, {
    name: "askscience",
    description: "askscience description here!!!!!!!"
}, {
    name: "AskHistorians",
    description: "AskHistorians Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "AskComputerScience",
    description: "AskComputerScience Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "AskCulinary",
    description: "AskCulinary Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "TrueAskReddit",
    description: "TrueAskReddit Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "AskSocialScience",
    description: "AskSocialScience Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "AskEngineers",
    description: "AskEngineers Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "askphilosophy",
    description: "askphilosophy Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "explainlikeimfive",
    description: "explainlikeimfive Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
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