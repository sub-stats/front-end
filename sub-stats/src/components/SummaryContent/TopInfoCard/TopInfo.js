import React from 'react';
import { Card, Button, Select, MenuItem } from '@material-ui/core';
import { Colors } from '../../Style-Colors';
import styled from 'styled-components';

import SelectSubreddit from './SelectSubreddit';

const StyledCard = styled.div`
    background-color: ${Colors.primary.white};
    width: 70%;
    max-width: 80rem;
    margin: 1rem;
    border: 1px solid orange;
    width: 100%;
    display: flex;
    align-items: baseline;
    padding: 1rem;

    & .MuiPaper-root {
        background-color: ${props => props.bgColor};
    }
`;
const StyledTitle = styled.h1`
    color: ${Colors.secondary.mango};
    margin-right: -1rem;
`;


function TopInfo ({fake, currentSub, setCurrentSub}) {

    return (
        <StyledCard bgColor={Colors.secondary.yellow}>
            <StyledTitle>r/</StyledTitle>
            <SelectSubreddit fake={fake} currentSub={currentSub} setCurrentSub={setCurrentSub} />
        </StyledCard>
    )
}

export default TopInfo;