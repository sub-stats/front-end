import React from 'react';
import { RedditForm, RedditField, Logo, LoginButton } from './Login';
import { withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Register = (props) => {
    return (
        <>
            <Logo src="./imgs/reddit-logo.png" alt="#" />
            <RedditForm>
                <RedditField type="text" name="username" placeholder="Username" autoComplete="off" />
                <RedditField type="password" name="password" placeholder="Password" autoComplete="off" />
                <LoginButton type="submit">Submit</LoginButton>
            </RedditForm>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </>
    )
}

export default withFormik({
    mapPropsToValues() {
        return {
            username: '',
            password: ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required().min(6),
        password: Yup.string().required().min(6)
    }),
    handleSubmit(credentials, formikBag) {
        formikBag.resetForm();
        formikBag.props.register(credentials);
        formikBag.props.history.push('/dashboard');
    }
})(Register);