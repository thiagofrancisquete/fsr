import React from 'react';

import { ErrorMessage, Formik, Form, Field } from 'formik';

import * as yup from 'yup';
import axios from 'axios';

const Login = () => {
  const handleSubmit = values => {
    axios.post('http://localhost:8080/v1/api/auth', values).then(resp =>
      console.log(resp),
    );
  };

  const validations = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(8)
      .max(20)
      .required(),
  });

  return (
    <div className='login-container'>
      <h1>LOGIN</h1>
      <p>Fill the fields to continue</p>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className='Login-form'>
          <div className='Form-Group'>
            <Field name='email' className='Form-Field-Email' />
            <ErrorMessage
              component='span'
              name='email'
              className='Form-Error'
            />
          </div>
          <div className='Form-Group'>
            <Field name='password' className='Form-Field-password' />
            <ErrorMessage
              component='span'
              name='password'
              className='Form-Error'
            />
          </div>
          <button className='Btn-Login' type='submit'>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
