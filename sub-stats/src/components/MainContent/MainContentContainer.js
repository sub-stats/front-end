import React from 'react';

import Container from '@material-ui/core/Container';
import styled from 'styled-components';

import LargeDataCard from './LargeDataCard';

const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
`;

const fake = ["a", "b", "c"];

function MainContentContainer () {
    return (
        <StyledContainer>
        <p> Main content container importing correctly!</p>
        {fake.map(displayData => {
            return (
                <LargeDataCard key={displayData} src="placeholder" />
            )
        })}
        </StyledContainer>
    )
}

export default MainContentContainer;