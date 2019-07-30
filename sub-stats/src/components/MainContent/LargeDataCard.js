import React from 'react';
import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { colors } from '../Style-Colors';

const StyledCard = styled(Card)`
    background-color: ${colors.primary.mint};
    width: 70%;
    max-width: 80rem;
    margin: 1rem;
`;
const StyledTitle = styled.h1`
    color: ${colors.primary.mint};
`;

function LargeDataCard (props) {
    console.log(colors.primary.blue)
    return (
        <StyledCard>
            <StyledTitle>I AM A LARGE CARD</StyledTitle>
        </StyledCard>
    )
}

export default LargeDataCard;