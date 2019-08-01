import React from 'react';
import { Typography } from '@material-ui/core'

import PostActivity from './PostActivity';
import CommentActivity from './CommentActivity';
import CommentPerPost from './CommentPerPost';
import DayOfWeek from './DayOfWeek';
import HourOfDay from './HourOfDay';

const dashLoading = document.querySelector('._dash-loading');

function MiddleInfo ({currentSub, startDate, endDate}) {
    // console.log(dashLoading);

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
                    endDate={reformattedEndDate}
                    graphAPIURL={URL} />
                <CommentActivity
                    currentSub={lowercaseCurrentSub}
                    startDate={reformattedStartDate}
                    endDate={reformattedEndDate}
                    graphAPIURL={URL} />
                <CommentPerPost
                    currentSub={lowercaseCurrentSub}
                    startDate={reformattedStartDate}
                    endDate={reformattedEndDate}
                    graphAPIURL={URL} />
                <DayOfWeek
                    currentSub={lowercaseCurrentSub}
                    startDate={reformattedStartDate}
                    endDate={reformattedEndDate}
                    graphAPIURL={URL} />
                <HourOfDay
                    currentSub={lowercaseCurrentSub}
                    startDate={reformattedStartDate}
                    endDate={reformattedEndDate}
                    graphAPIURL={URL} />
        </div>
        
    )
}

export default MiddleInfo;