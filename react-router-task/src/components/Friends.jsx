import React from "react";
import { Link, Outlet } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge'
import Alert from "react-bootstrap/Alert";

export default function Friends({ user }) {
  return (
    <React.Fragment>
      <Stack gap={2} className="col-md-3 mx-auto">
        <h1 style={{ textAlign: "center", marginTop: "32px" }}>
          <Badge bg="primary">Friends page</Badge>
        </h1>

        <Outlet />

        {
          (!user || !user.friends || user.friends.length === 0)
          ?
          <Alert variant="warning">You do not have any friend :(</Alert>
          :
          <ListGroup>
          {
            user.friends.map((person, index) => (
              <ListGroup.Item key={index}>
                <Link to={`/friends/${person.id}`}>
                  {person.name}
                </Link>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
        }
      </Stack>
    </React.Fragment>
  )
}