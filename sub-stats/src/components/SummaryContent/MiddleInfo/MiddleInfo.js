import React, { useState, useEffect } from 'react';
import PostActivity from './PostActivity';
import { Typography } from '@material-ui/core'
import axios from 'axios';
import { apiURL } from '../../../utils/api';

function MiddleInfo (props) {
    const [avgCommentsPerPost, setAvgCommentsPerPost] = useState(0);
    const [avgPostsPerDay, setAvgPostsPerDay] = useState(0);
    const subName = props.currentSub.name;

    useEffect(() => {
        async function getAveragePosts() {
            const results = await axios.get(`${apiURL}/posts?start=${props.startDate}&end=${props.endDate}&subreddit=${subName}`);
            const data = results.data.results;
            const avg = data.reduce((acc, res) => {
                return acc + res.data.postsCount;
            }, 0) / data.length;
            setAvgPostsPerDay(Math.round(avg));
        }

        async function getAverageComments() {
            const results = await axios.get(`${apiURL}/comments?start=${props.startDate}&end=${props.endDate}&subreddit=${subName}`);
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
    }, [props.startDate, props.endDate, subName]);

    return (
        <div>
            <Typography variant="h5" color="secondary">When do users post on this subreddit?</Typography>
                <PostActivity
                    currentSub={props.currentSub}
                    startDate={props.startDate}
                    endDate={props.endDate} />
            <Typography>Users post most frequently between the hours of INSERT HOURS HERE UTC. On average, there are {avgPostsPerDay} posts a day, and each post gets {avgCommentsPerPost} number of comments.</Typography>
        </div>
        
    )
}

export default MiddleInfo;