import React from 'react';
import styled from 'styled-components'
import { Typography, Divider } from '@material-ui/core'

import { PrimaryCard, SecondaryCard, randomColor } from '../../Style-Colors'

const StyledTopic = styled(SecondaryCard)`
    background-image: ${randomColor};
    
    display: flex;
    margin: .5rem;
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
             <Typography variant="body2">"Topics" are clusters of words which comments share a strong similarity to. Themes can be inferred by human interpretation. For example, the topic "code bytes memory files problems" could be thought of as "Memory Issues."
             <br />
             <br />
             (We're not going to guess at what "shrek man friend years s***" could mean.)</Typography>
             <br />
                    <div id="hmm">
                        {currentSub.topics.map(a => {
                                return (
                                    <StyledTopic key={a}>{a}</StyledTopic>
                            )
                        })}
                    </div>
               
            </StyledDivColumn>
            </StyledDivRow></div>
        }
            
        </div>
        
    )
}

export default BottomInfo;