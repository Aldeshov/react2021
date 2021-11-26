import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Stack from 'react-bootstrap/Stack'

export default function Home({ user }) {
  return (
    <React.Fragment>
      <Stack gap={2} className="col-md-5 mx-auto">
        <h1 style={{ margin: "32px" }}>
          Welcome to the homepage!
        </h1>
        {
          user
            ?
            <Alert variant="success">
              <strong><h4>Nice to see you {user.name}</h4></strong>
              <h6>Please select the page you want to show</h6>
            </Alert>
            :
            <Alert variant="warning">
              <h4>Please first authenticate!</h4>
            </Alert>
        }
      </Stack>
    </React.Fragment>
  )
}