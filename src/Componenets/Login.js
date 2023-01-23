import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handelLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem('user'));
    if (input.email === loggeduser.email && input.password === loggeduser.password) {
      localStorage.setItem("loggedin", true);
      navigate("/home");
    }
    else {
      alert("wrong Email Or Password")

    }
  };

  return (

    <div>
      <Form onSubmit={handelLogin}>
        <h1>Login</h1>

        <br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} type="email" placeholder="Enter email" />
        </Form.Group>
        <br></br>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login        </Button>

        <br></br>
        <Form.Group>
          Dont have an account: <a href="/register">Register</a>
        </Form.Group>

      </Form>
    </div>
  )
}

export default Login
