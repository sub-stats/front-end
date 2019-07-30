import React from 'react';

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
    return (
        <StyledContainer>
            <TopInfo fake={fake} currentSub={currentSub} setCurrentSub={setCurrentSub}/>
            {fake.map(displayData => {
                return (
                    <LargeDataCard key={displayData} src="placeholder" />
                )
            })}

        </StyledContainer>
    )
}

export default MainContentContainer;