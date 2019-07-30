import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import styled from 'styled-components';

import DataCard from './DataCard';
import TopInfo from './TopInfo/TopInfo';
import MiddleInfo from './MiddleInfo/MiddleInfo'

const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  
`;

const fake = [{
    name: 'AskReddit',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}, {
    name: "askscience",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
}, {
    name: "AskHistorians",
    description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "AskComputerScience",
    description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "AskCulinary",
    description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "TrueAskReddit",
    description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "AskSocialScience",
    description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "AskEngineers",
    description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}, {
    name: "askphilosophy",
    description: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
}
];

function MainContentContainer ({currentSub, setCurrentSub}) {
    const today = new Date();
    const yesterday = new Date(new Date().setDate(today.getDate() - 1));
    const [startDate, setStartDate] = useState(yesterday.toLocaleDateString('en-CA'));
    const [endDate, setEndDate] = useState(today.toLocaleDateString('en-CA'));

    return (
        <StyledContainer>
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
            <MiddleInfo />

        </StyledContainer>
    )
}

export default MainContentContainer;