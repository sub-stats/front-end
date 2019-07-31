import React from 'react';
import { RedditForm, RedditField, Logo, LoginButton, FormContainer, HeaderText } from './Login';
import { withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Register = ({isRegistering}) => {
    return (
        <>  
            {isRegistering ? <h1>Loading...</h1> :
                <FormContainer>
                    {/* <Logo src="./imgs/reddit-logo.png" alt="#" /> */}
                    <HeaderText>Better Sub Stats</HeaderText>
                    <RedditForm>
                        <RedditField type="text" name="username" placeholder="Username" autoComplete="off" />
                        <RedditField type="password" name="password" placeholder="Password" autoComplete="off" />
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
        username: Yup.string().required().min(6),
        password: Yup.string().required().min(6)
    }),
    handleSubmit(credentials, formikBag) {
        formikBag.resetForm();
        formikBag.props.register(credentials);
    }
})(Register);