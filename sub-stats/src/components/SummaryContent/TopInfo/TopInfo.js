import React, { useState, useEffect } from 'react';
import { Divider, Typography, Box, Tooltip, CardActionArea, Popover } from '@material-ui/core';
import { Colors, PrimaryCard, SecondaryCard } from '../../Style-Colors';
import styled from 'styled-components';
import axios from 'axios';

import SelectSubreddit from './SelectSubreddit';
import SubDatePicker from './SubDatePicker';
import { apiURL } from '../../../utils/api'; 
import { withStyles } from '@material-ui/styles';

const StyledCard = styled.div`
    background-color: ${Colors.primary.white}; 
    width: 90%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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
const StyledPrimaryCard = styled(PrimaryCard)`
    margin-left: 0;
`;

const StyledSecondaryCard = styled(SecondaryCard)`
    margin-left: 0;
`;

function TooltipCard({label, value, tooltip}) {

    const ClickCard = styled(SecondaryCard)`
    cursor: pointer
    `;

    return (
        <Tooltip title={tooltip} placement="top">
            <ClickCard>
                <Typography variant="button">{label}: {value}</Typography>
            </ClickCard>
        </Tooltip>
    );
}

function TopInfo ({fake, currentSub, setCurrentSub, startDate, setStartDate, endDate, setEndDate}) {

    const [trendingScore, setTrendingScore] = useState({});
    const [avgCommentsPerPost, setAvgCommentsPerPost] = useState(0);
    const [avgPostsPerDay, setAvgPostsPerDay] = useState(0);
    const subName = currentSub.name;

    useEffect(() => {
        async function getAveragePosts() {
            const results = await axios.get(`${apiURL}/posts?start=${startDate}&end=${endDate}&subreddit=${subName}`);
            const data = results.data.results;
            const avg = data.reduce((acc, res) => {
                return acc + res.data.postsCount;
            }, 0) / data.length;
            setAvgPostsPerDay(Math.round(avg));
        }

        async function getAverageComments() {
            const results = await axios.get(`${apiURL}/comments?start=${startDate}&end=${endDate}&subreddit=${subName}`);
            const data = results.data.results;
            const avg = data.reduce((acc, res) => {
                return acc + res.data.averageCommentsPerPost;
            }, 0) / data.length;
            setAvgCommentsPerPost(Math.round(avg));
        }

        if (subName === "" || subName === "Select a subreddit") {
            setAvgCommentsPerPost(0);
            setAvgPostsPerDay(0);
        } else {
            getAveragePosts();
            getAverageComments();
        }
    }, [startDate, endDate, subName]);

    useEffect(() => {
        const getTrending = () => {
            axios.get(`${apiURL}/trending?subreddit=${currentSub.name}`)
             .then(res => {
                // console.log(res.data.trendingScore)
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

    const trendingTooltip = `A score representing ${currentSub.name}'s follower count (${trendingScore.followerCount}) over its age (${trendingScore.age} days).`;
    const postTooltip = `The number of submissions that ${currentSub.name} receives per day on average.`;
    const commentTooltip = `The number of comments that each submission on ${currentSub.name} receives on average.`;
    
    return (
        <>
        <StyledCard>

        <StyledDivRow>
            <StyledDivColumn>

                <StyledPrimaryCard>
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
                        <SubDatePicker label="Start Date" date={startDate} setDate={setStartDate}></SubDatePicker>
                        <SubDatePicker label="End Date" date={endDate} setDate={setEndDate}></SubDatePicker>
                    </StyledDivRow>
                </StyledPrimaryCard>
            </StyledDivColumn>
            
            <StyledDivColumn>
                <StyledBox textAlign="left">
                    <Typography variant="h5" color="secondary">About this subreddit</Typography>
                    {currentSub.description ? <Typography >{currentSub.description}</Typography> : <Typography>Select a subreddit to read details about it.</Typography>}
                </StyledBox>
            </StyledDivColumn>
        </StyledDivRow>
        {currentSub.name !== "Select a subreddit" && <StyledDivRow>
  

            <TooltipCard label="Trending Score" value={trendingScore.score} tooltip={trendingTooltip}/>
            <TooltipCard label="Submissions/Day" value={avgPostsPerDay} tooltip={postTooltip}/>
            <TooltipCard label="Comments/Submission" value={avgCommentsPerPost} tooltip={commentTooltip}/>
        </StyledDivRow>}

        </StyledCard>
        <Divider />
        <br />
        </>
    )
}

export default TopInfo;