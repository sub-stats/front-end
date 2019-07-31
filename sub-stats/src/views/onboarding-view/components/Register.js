import React from 'react';
import { RedditForm, RedditField, Logo, LoginButton } from './Login';

const Register = () => {
    return (
        <RedditForm>
            <RedditField type="text" name="username" placeholder="Username" autoComplete="off" />
        </RedditForm>
    )
}

export default Register;