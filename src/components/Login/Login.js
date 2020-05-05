import React from "react";
import { Button, Card } from "react-bootstrap";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Card className="mt-4" style={{ maxWidth: "385px", width: "100%" }}>
        <Card.Body>
          <p className="text-center">Sign in to use the app</p>
          <hr />
          <Button
            variant="outline-dark"
            size="md"
            block
            href="http://localhost:5000/auth/github"
          >
            Login with Github
          </Button>
          <br />
          <Button
            variant="outline-dark"
            size="md"
            block
            href="http://localhost:5000/auth/logout"
          >
            Logout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
