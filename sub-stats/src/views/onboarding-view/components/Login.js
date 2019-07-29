import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    return (
        <Form>
            <Field type="text" placeholder="Username" name="username" autoComplete="off" />
            <Field type="email" placeholder="Email" name="email" autoComplete="off" />
            <button type="submit">Log In</button>
        </Form>
    )
}

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