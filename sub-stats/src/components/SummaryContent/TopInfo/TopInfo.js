import React, { useState, useEffect } from 'react';
import { Divider, Typography, Box } from '@material-ui/core';
import { Colors, PrimaryCard, SecondaryCard } from '../../Style-Colors';
import styled from 'styled-components';
import axios from 'axios';

import SelectSubreddit from './SelectSubreddit';
import DatePicker from './DatePicker';
import { apiURL } from '../../../utils/api';

const StyledCard = styled.div`
    background-color: ${Colors.primary.white};
    width: 90%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 auto;
`;

const StyledDivRow = styled.div`
    display: flex;
    align-items: baseline;

`;

const StyledDivColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledBox = styled(Box)`
    max-width: 30rem;
`


function TopInfo ({fake, currentSub, setCurrentSub, startDate, setStartDate, endDate, setEndDate}) {

    const [trendingScore, setTrendingScore] = useState({})
    const [avgScore, setAvgScore] = useState([])

    useEffect(() => {
        const getTrending = () => {
            axios.get(`https://yuka-livingston-subreddit.herokuapp.com/trending?subreddit=${currentSub.name}`)
             .then(res => {
                console.log(res.data.trendingScore)
                setTrendingScore({
                    followerCount: res.data.numberOfFollowers,
                    age: Number(Math.round(parseFloat(res.data.ageOfSubInDays)+'e1')+'e-1'),
                    score: Number(Math.round(parseFloat(res.data.trendingScore)+'e2')+'e-2')
                })
            })
            .catch(error => console.log("ERROR HERE: ", error))
                }
                getTrending()
            }, [ currentSub.name ])

    useEffect(() => { // This currently doesn't work, will troubleshoot it in the morning.
        const getTrending = () => {
            fake.map(a => {

            })
            axios.get(`https://yuka-livingston-subreddit.herokuapp.com/trending?subreddit=${currentSub.name}`)
             .then(res => {
                const score = res.data.setTrendingScore;
                setAvgScore([...avgScore, score ])
                console.log(avgScore)
            })
            .catch(error => console.log("ERROR HERE: ", error))
                }

                getTrending()
            }, [ currentSub.name ])
    

    return (
        <>
        <StyledCard>

        <StyledDivRow>
            <StyledDivColumn>

                <PrimaryCard>
                    <StyledDivRow>
                        <Typography variant="h4" >r/</Typography>
                        <SelectSubreddit
                            fake={fake}
                            currentSub={currentSub}
                            setCurrentSub={setCurrentSub} />
                    </StyledDivRow>
                    
                    <br />
                    <br />

                    <StyledDivRow>
                        <DatePicker label="Start Date" date={startDate} setDate={setStartDate}></DatePicker>
                        <DatePicker label="End Date" date={endDate} setDate={setEndDate}></DatePicker>
                    </StyledDivRow>
                </PrimaryCard>
            </StyledDivColumn>
            
            <StyledDivColumn>
                <StyledBox textAlign="left">
                    <Typography variant="h5" color="secondary">About this subreddit</Typography>
                    {currentSub.description ? <Typography >{currentSub.description}</Typography> : <Typography>Select a subreddit to read details about it.</Typography>}
                </StyledBox>
            </StyledDivColumn>
          
            
            {/*<Divider />
                <Button>Trending y/n ???</Button>
            <Typography variant="caption" color="textSecondary">This subreddit is currently trending! It has a larger than average userbase than other subreddits the same age, and it is growing more quickly.</Typography>*/}
        </StyledDivRow>
        {currentSub.name !== "Select a subreddit" && <StyledDivRow>
            <SecondaryCard>
                <Typography variant="button">Trending Score: {trendingScore.score}</Typography>
            </SecondaryCard>
            <Typography variant="caption">We analyzed the popularity and age of {currentSub.name} to determine the trending score. It has {trendingScore.followerCount} followers and is {trendingScore.age} days old. The average trending score is {avgScore.length > 0 ? avgScore : "2.1"}.</Typography>
        </StyledDivRow>}

        
            
        </StyledCard>
        <Divider />
        <br />
        </>
    )
}

export default TopInfo;