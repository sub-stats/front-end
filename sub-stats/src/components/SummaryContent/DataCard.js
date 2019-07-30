import React from 'react';
import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { Colors } from '../Style-Colors';

const StyledCard = styled(Card)`
    background-color: ${Colors.primary.mint};
    width: 70%;
    max-width: 80rem;
    margin: 1rem;
`;
const StyledTitle = styled.h1`
    color: ${Colors.primary.mint};
`;

function DataCard (props) {
    return (
        <StyledCard>
            <StyledTitle>I AM A DATA CARD</StyledTitle>
        </StyledCard>
    )
}

export default DataCard;