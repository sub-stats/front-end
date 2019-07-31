import React, { useEffect } from 'react';
import { Card } from '@material-ui/core';
import axios from 'axios';

function PostActivity (props) {
    useEffect(() => {
        axios.get(`https://yuka-livingston-subreddit.herokuapp.com/posts?start=${props.startDate}&end=${props.endDate}&subreddit=${props.currentSub.name}`)
            .then(response => {
                console.log("Response data: ", response);
            })
            .catch(error => console.log(error.message))
    }, [props.currentSub, props.startDate, props.endDate]);

    // console.log("This is my current sub: ", props.currentSub.name);
    // console.log("This is my start date: ", props.startDate);
    // console.log("This is my end date: ", props.endDate);

    return (
        <Card>
            {/* <StyledTitle>I AM A POST ACTIVITY GRAPH SHOWING 24 HOURS OF AVERAGE POSTING AND COMMENTING ACTIVITY</StyledTitle> */}
            
        </Card>
    )
}

export default PostActivity;