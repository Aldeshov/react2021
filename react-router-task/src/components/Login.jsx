import React, { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert'
import { BiLogIn } from 'react-icons/bi'

import { users } from '../data/users'

export default function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    const user = users.find((user) => user.username === username && user.password === password)

    if (user) {
      setUser(user);
      navigate('/', { replace: true })
      return true
    }

    setErrorMessage('Username or password is not correct');
    return false
  }

  return (
    <React.Fragment>
      <Stack gap={2} className="col-md-5 mx-auto">
        <h1 style={{ textAlign: "center", marginTop: "32px" }}>
          <Badge bg="secondary">Login page</Badge>
        </h1>
        <Container>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
              <Form.Text className="text-muted">
                See available usernames and passwords: <Link to='/secrets'>secrets</Link>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCheckbox">
              <Form.Check type="checkbox" label="Stay logged in" />
            </Form.Group>

            {errorMessage && (
              <Alert variant="danger">
                {errorMessage}
              </Alert>
            )}

            <Button variant="primary" type="submit">
              <BiLogIn style={{ marginBottom: '4px' }} /> Submit
            </Button>
          </Form>
        </Container>
      </Stack>
    </React.Fragment>
  )
}