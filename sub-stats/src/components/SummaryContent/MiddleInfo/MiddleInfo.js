import React, { useState, useEffect } from 'react';
import PostActivity from './PostActivity';
import { Typography } from '@material-ui/core'
import axios from 'axios';
import { apiURL } from '../../../utils/api';

function MiddleInfo ({currentSub, startDate, endDate}) {

    const startYear = startDate.split('-')[0].split('').slice(2).join('');
    let reformattedStartDate = startDate.split('-').slice(1);
    reformattedStartDate.push(startYear);

    const endYear = endDate.split('-')[0].split('').slice(2).join('');
    let reformattedEndDate = endDate.split('-').slice(1);
    reformattedEndDate.push(endYear);

    const lowercaseCurrentSub = currentSub.name.toLowerCase();

    return (
        <div>
            <Typography variant="h5" color="secondary">When do users post on this subreddit?</Typography>
                <PostActivity
                    currentSub={lowercaseCurrentSub}
                    startDate={reformattedStartDate}
                    endDate={reformattedEndDate} />
        </div>
        
    )
}

export default MiddleInfo;