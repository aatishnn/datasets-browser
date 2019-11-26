import React, { Component } from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import Axios from 'axios';
import { FormGroup, Label, Form, Input, FormText, FormFeedback, Button } from 'reactstrap'

import {getAuthState} from '../../selectors/authSelectors'
import {loginSuccess, loginInProgress, loginFailed} from '../../actions/authActions'



const loginSchema = Yup.object().shape({
  'username': Yup.string()
    .required('Required'),
  'password': Yup.string()
    .required('Required'),

});

const initialValues = {
  username: '',
  password: ''
}

class LoginForm extends Component {
  state = {
    redirectToReferrer: false
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    console.log(from)

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting, setFieldValue}) => {
          const url = `/api/auth/login/`
          setSubmitting(true);
          this.props.loginInProgress();
          Axios.post(url, values)
            .then((res) => {
              setSubmitting(false)
              toast.success(`Logged in successfully.`)
              this.props.loginSuccess(res.data.key)
              this.setState({redirectToReferrer: true})
            })
            .catch(() => {
              toast.error('There was an error logging in. Check your credentials.')
              setSubmitting(false);
              this.props.loginFailed()
            });
        }}
      >
        {({ isSubmitting, handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                tag={Field}
                valid={touched.username && !errors.username}
                invalid={touched.username && errors.username}
              />
              <FormFeedback>{errors.username}</FormFeedback>
              <FormText></FormText>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                tag={Field}
                valid={touched.password && !errors.password}
                invalid={touched.password && errors.password}
              />
              <FormFeedback>{errors.password}</FormFeedback>
              <FormText></FormText>
            </FormGroup>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>

    );
  }
}

const mapStatetoProps = function(state) {
  return {
    ...getAuthState(state)
  }
}

const mapDispatchToProps = {
  loginSuccess,
  loginInProgress,
  loginFailed
}
 
export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(LoginForm));