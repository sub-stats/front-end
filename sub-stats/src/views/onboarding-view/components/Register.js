import React from 'react';
import { RedditForm, RedditField, Logo, LoginButton, FormContainer, HeaderText, ErrorMessage } from './Login';
import { withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Register = ({isRegistering, touched, errors}) => {
    return (
        <>  
            {isRegistering ? <h1>Loading...</h1> :
                <FormContainer>
                    {/* <Logo src="./imgs/reddit-logo.png" alt="#" /> */}
                    <HeaderText>Better Sub Stats</HeaderText>
                    <RedditForm>
                        <RedditField type="text" name="username" placeholder="Username" autoComplete="off" />
                        {errors.username && <ErrorMessage>{touched.username && errors.username}</ErrorMessage>}
                        <RedditField type="password" name="password" placeholder="Password" autoComplete="off" />
                        {errors.password && <ErrorMessage>{touched.password && errors.password}</ErrorMessage>}
                        <LoginButton type="submit">REGISTER</LoginButton>
                    </RedditForm>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </FormContainer>
            }
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
        username: Yup.string().required('Username is required.').min(6, 'Username must be at least 6 characters.'),
        password: Yup.string().required('Password is required.').min(6, 'Password must be at least 6 characters.')
    }),
    handleSubmit(credentials, formikBag) {
        formikBag.resetForm();
        formikBag.props.register(credentials);
    }
})(Register);