import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import styled from 'styled-components';

import LargeDataCard from './LargeDataCard';
import TopInfo from './TopInfoCard/TopInfo';

const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
`;

const fake = ["explainlikeimfive", "askhistorians", "relationships"];

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
            {fake.map(displayData => {
                return (
                    <LargeDataCard key={displayData} src="placeholder" />
                )
            })}

        </StyledContainer>
    )
}

export default MainContentContainer;