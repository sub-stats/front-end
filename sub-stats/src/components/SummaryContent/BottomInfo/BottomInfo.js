import React from 'react';
import styled from 'styled-components'
import { Typography, Divider } from '@material-ui/core'

import { PrimaryCard, SecondaryCard, randomColor } from '../../Style-Colors'

const StyledTopic = styled(SecondaryCard)`
    background-color: ${randomColor};
    max-width: 30%;
    display: flex;
    margin: .5 rem;
`;
const BottomCard = styled.div`
    width: 60%;
    text-align: center;
    display: flex;
    flex-direction: row-wrap;
`;
const StyledDivRow = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-around;
`;

const StyledDivColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
             <div>
            <br />
             <StyledDivRow>
             
             <BottomCard>
                <PrimaryCard>
                    <Typography variant="h6">Top {currentSub.name} post between {startDate} and {endDate}</Typography>
                    <div>
                        
                    </div>
                </PrimaryCard>
            </BottomCard>
             <StyledDivColumn>
             <Typography variant="h6" color="primary">Other topics of conversation:</Typography>
             <br />
                    <div id="hmm">
                        <StyledTopic><Typography> Topic 1</Typography></StyledTopic>
                        <StyledTopic>Topic 222222</StyledTopic>
                        <StyledTopic>another topic</StyledTopic>
                        <StyledTopic>Am I another topic?</StyledTopic>
                        <StyledTopic>potatoes</StyledTopic>
                    </div>
               
            </StyledDivColumn>
            </StyledDivRow></div>
        }
            
        </div>
        
    )
}

export default BottomInfo;