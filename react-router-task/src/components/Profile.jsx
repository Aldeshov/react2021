import React from 'react'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Profile({ user }) {
  return (
    <React.Fragment>
      <Stack gap={2} className="col-md-3 mx-auto">
        <Alert variant="success" style={{ marginTop: '32px' }}>
          Hello {user.name}!
        </Alert>
        <Card>
          <Image src={user.imageURL} style={{ padding: '32px' }} roundedCircle />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              Simple user information card designed by React-Bootstrap!
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem><b>Age:</b> {user.age}</ListGroupItem>
            <ListGroupItem><b>Country:</b> {user.country}</ListGroupItem>
            <ListGroupItem><b>Friends:</b> {user.friends.length}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Facebook</Card.Link>
            <Card.Link href="#">Instagram</Card.Link>
          </Card.Body>
        </Card>
      </Stack>
    </React.Fragment>
  )
}