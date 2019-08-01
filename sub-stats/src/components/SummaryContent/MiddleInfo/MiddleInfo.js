import React, { useState, useEffect } from 'react';
import PostActivity from './PostActivity';
import { Typography } from '@material-ui/core'
import axios from 'axios';
import { apiURL } from '../../../utils/api';

function MiddleInfo (props) {

    return (
        <div>
            <Typography variant="h5" color="secondary">When do users post on this subreddit?</Typography>
                <PostActivity
                    currentSub={props.currentSub}
                    startDate={props.startDate}
                    endDate={props.endDate} />
        </div>
        
    )
}

export default MiddleInfo;