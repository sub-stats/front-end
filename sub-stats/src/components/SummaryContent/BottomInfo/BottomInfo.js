import React from 'react';
import styled from 'styled-components'
import { Typography, Divider } from '@material-ui/core'

import { PrimaryCard, SecondaryCard, randomColor } from '../../Style-Colors'

const StyledTopic = styled(SecondaryCard)`
    background-color: ${randomColor};
    width: auto;
`;
const BottomCard = styled.div`
    width: 60%;
`;
const StyledDivRow = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-around;
`;

const StyledDivColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

function BottomInfo ({fake, currentSub, startDate, endDate}) {
    return (
        <div>
            <br/>
            <Divider />
            <br/>
            <Typography variant="h5" color="secondary">What do people post about{currentSub.name !== `Select a subreddit` ? ` in ${currentSub.name}?` : `?`}</Typography>
            {currentSub.name === `Select a subreddit` ?
             <div> <br/> <Typography> Select a subreddit to see.</Typography> <br/> </div>  :

             <StyledDivRow>
             <BottomCard>
                <PrimaryCard>
                    <Typography variant="h6">Top {currentSub.name} post between {startDate} and {endDate}</Typography>
                    <div>
                        
                    </div>
                </PrimaryCard>
            </BottomCard>
             <BottomCard>
                    <Typography variant="h6" color="primary">Other topics of conversation:</Typography>
                    <div>
                        <StyledTopic>Topic 1</StyledTopic>
                        <StyledTopic>Topic 222222</StyledTopic>
                        <StyledTopic>another topic</StyledTopic>
                        <StyledTopic>Am I another topic?</StyledTopic>
                        <StyledTopic>potatoes</StyledTopic>
                    </div>
               
            </BottomCard>
            </StyledDivRow>
        }
            
        </div>
        
    )
}

export default BottomInfo;