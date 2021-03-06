import React from 'react';
import styled from 'styled-components'
import { Typography, Divider } from '@material-ui/core'

import { SecondaryCard, randomColor } from '../../Style-Colors'

const StyledTopic = styled(SecondaryCard)`
    background-image: ${randomColor};
    display: flex;
    margin: .5rem;
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

function BottomInfo ({currentSub}) {
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
                <StyledDivColumn>
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