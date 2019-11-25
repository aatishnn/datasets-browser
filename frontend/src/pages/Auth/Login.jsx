import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import LoginForm from './LoginForm';
import GoBackButton from '../../components/GoBackButton';


class Login extends Component {
  render() {
    return (
      <>
        <GoBackButton />
        <Card className="mt-4">
          <CardHeader><h4>Login</h4></CardHeader>
          <CardBody>
            <LoginForm />
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Login;