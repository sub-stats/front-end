import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

import { Colors } from '../../Style-Colors'

const StyledTitle = styled.h5`
    color: ${Colors.secondary.alienblue};
`;

function PostActivity () {
    return (
        <Card>
            <StyledTitle>I AM A POST ACTIVITY GRAPH SHOWING 24 HOURS OF AVERAGE POSTING AND COMMENTING ACTIVITY</StyledTitle>
        </Card>
    )
}

export default PostActivity;