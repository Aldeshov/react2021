import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'

import { users } from '../data/users'

export default function Friend() {
    return (
        <React.Fragment>
            <Stack gap={2} className="col-md-5 mx-auto" style={{ marginTop: 16 }}>
                <ListGroup>
                    {users.map(user => (
                        <ListGroup.Item key={user.id}>
                            <b>Username:</b> {user.username}
                            <br />
                            <b>Password:</b> {user.password}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Stack>
        </React.Fragment>
    )
}