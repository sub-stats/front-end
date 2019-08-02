import React from 'react';
import { RedditForm, RedditField, Logo, LoginButton, FormContainer, HeaderText, ErrorMessage, CenterDiv } from './Login';
import { withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import styled from 'styled-components';
import { PrimaryCard } from '../../../components/Style-Colors';

const StyledPrimaryCard = styled(PrimaryCard)`
    width: 325px;
    text-align: center;
`;

const Register = ({isRegistering, touched, errors}) => {
    return (
        <>  
            {isRegistering ? <h1>Loading...</h1> :
                <CenterDiv>
                    <StyledPrimaryCard>
                        {/* <Logo src="./imgs/reddit-logo.png" alt="#" /> */}
                        <RedditForm>
                            <RedditField type="text" name="username" placeholder="Username" autoComplete="off" />
                            {errors.username && <ErrorMessage>{touched.username && errors.username}</ErrorMessage>}
                            <RedditField type="password" name="password" placeholder="Password" autoComplete="off" />
                            {errors.password && <ErrorMessage>{touched.password && errors.password}</ErrorMessage>}
                            <LoginButton type="submit">REGISTER</LoginButton>
                        </RedditForm>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </StyledPrimaryCard>
                </CenterDiv>
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