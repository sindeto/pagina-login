// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  LoginContainer,
  LoginForm,
  FormGroup,
  Label,
  Input,
  Button,
  Title
} from './styles';

const LoginPage = () => {
  return (
    <LoginContainer>
      <Title>Login</Title>
      <LoginForm>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

ReactDOM.render(<LoginPage />, document.getElementById('root'));
