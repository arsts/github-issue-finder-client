import React from "react";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <h1>Please Login to use the app</h1>
      <Button href="http://localhost:5000/auth/github">
        Login with Github
      </Button>
      <br />
      <br />
      <Button href="http://localhost:5000/auth/logout">Logout</Button>
    </div>
  );
};

export default Login;
