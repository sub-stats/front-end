import React from 'react';
import PostActivity from './PostActivity';
import { Typography } from '@material-ui/core'

function MiddleInfo (props) {
    return (
        <div>
            <Typography variant="h5" color="secondary">When do users post on this subreddit?</Typography>
                <PostActivity
                    currentSub={props.currentSub}
                    startDate={props.startDate}
                    endDate={props.endDate} />
            <Typography>Users post most frequently between the hours of INSERT HOURS HERE UTC. On average, there are AVERAGE NUMBER posts a day, and each post gets AVERAGE COMMENTS number of comments.</Typography>
        </div>
        
    )
}

export default MiddleInfo;