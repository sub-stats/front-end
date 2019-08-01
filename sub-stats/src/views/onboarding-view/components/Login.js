import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const Login = ({error, isLoggingIn, errors, touched}) => {
    return (
        <>
            {isLoggingIn ? 
                <CenterDiv><Loader type="TailSpin" color="black" /></CenterDiv> :
                <FormContainer>
                    {/* <Logo src="./imgs/reddit-logo.png" alt="#" /> */}
                    <HeaderText>Better Sub Stats</HeaderText>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <RedditForm>
                        <RedditField type="text" placeholder="Username" name="username" autoComplete="off" />
                        {errors.username && <ErrorMessage>{touched.username && errors.username}</ErrorMessage>}
                        <RedditField type="password" placeholder="Password" name="password" autoComplete="off" />
                        {errors.password && <ErrorMessage>{touched.password && errors.password}</ErrorMessage>}
                        <LoginButton type="submit">LOG IN</LoginButton>
                        <p>Don't have an account yet? <Link to="/register">Register</Link></p>
                    </RedditForm>
                </FormContainer>
            }
        </>
    )
}

export const ErrorMessage = styled.p`
    margin-top: 0;
    font-size: 0.8rem;
    color: red;
`;

export const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 325px;
    text-align: center;
    background-color: white;
    border-radius: 5px;
    margin: auto;
    margin-top: 50px;
`;

export const RedditForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: center;
    margin: auto;
`;

export const RedditField = styled(Field)`
    font-size: 14px;
    border-radius: 5px;
    outline: none;
    background-color: rgb(246, 247, 248);
    border: 1px solid rgb(237, 239, 241);
    margin-bottom: 15px;
    width: 100%;
    padding: 8px 16px;

    &::placeholder {
        font-weight: 100;
    }

    &:hover, &:focus {
        border-color: rgb(0, 121, 211);
        background-color: white;
    }
`;

export const Logo = styled.img`
    margin-bottom: 10px;
    height: 50px;
    width: 50%;
    align-self: center;
`;

export const HeaderText = styled.h1`
    font-weight: 200;
`;

export const LoginButton = styled.button`
    border: 1px solid rgb(0, 121, 211);
    color: rgb(0, 121, 211);
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    width: 200px;
    outline: none;
    cursor: pointer;
`;

export default withFormik({
    mapPropsToValues() {
        return {
            username: '',
            password: ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required.').min(6, 'Username must be at least 6 characters.'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters.')
    }),
    handleSubmit(credentials, formikBag) {
        formikBag.resetForm();
        formikBag.props.login(credentials);
    }
})(Login);