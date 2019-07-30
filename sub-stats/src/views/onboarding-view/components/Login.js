import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Login = ({errors, touched}) => {
    return (
        <>
            <Logo src="./imgs/reddit-logo.png" alt="#" />
            <RedditForm>
                <RedditField type="text" placeholder="Username" name="username" autoComplete="off" />
                {/* <p>{touched.username && errors.username}</p> */}
                <RedditField type="email" placeholder="Email" name="email" autoComplete="off" />
                {/* <p>{touched.email && errors.email}</p> */}
                <LoginButton type="submit">LOG IN</LoginButton>
            </RedditForm>
        </>
    )
}

const RedditForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: center;
    margin: auto;
`;

const RedditField = styled(Field)`
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

const Logo = styled.img`
    height: 60px;
    margin-bottom: 10px;
    margin-top: 50px;
`;

const LoginButton = styled.button`
    border: 1px solid rgb(0, 121, 211);
    color: rgb(0, 121, 211);
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    width: 50%;
`;


export default withFormik({
    mapPropsToValues() {
        return {
            username: '',
            email: ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required().min(6),
        email: Yup.string().required()
    }),
    handleSubmit(credentials, formikBag) {
        formikBag.resetForm();
        formikBag.props.setLoggedIn(credentials.username);
        formikBag.props.history.push('/dashboard');
    }
})(Login);