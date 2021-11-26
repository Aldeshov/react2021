import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Alert from 'react-bootstrap/Alert'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

export default function Friend({ user }) {
  const { friendID } = useParams();
  const [friend, setFriend] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const friend = user.friends.find((person) => person.id === friendID);
    if (friend) {
      setFriend(friend);
    } else {
      setErrorMessage('You dont have such friend at the moment in your friend list');
    }
  }, [friendID, user]);

  if (errorMessage) {
    return (
      <Alert variant="danger">
        {errorMessage}
      </Alert>
    )
  }

  return (
    friend
    &&
    <Card>
      <Card.Img variant="top" src={friend.imageURL} />
      <Card.Body>
        <Card.Title>{friend.name}</Card.Title>
        <Card.Text>
          He/She is your friend!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem><strong>Age:</strong> {friend.age}</ListGroupItem>
        <ListGroupItem><strong>Country:</strong> {friend.country}</ListGroupItem>
      </ListGroup>
    </Card>
  )
}