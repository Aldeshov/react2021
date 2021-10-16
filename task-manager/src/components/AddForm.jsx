import React from 'react'
import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import { AiOutlineClockCircle } from 'react-icons/ai'

export const AddForm = ({ onAdd }) => {
    const [validated, setValidated] = useState(false);

    const [showToggled, setShowToggled] = useState(true);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)
    const isDone = false

    const formSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }
        else {
            onAdd({ title, description, time, reminder, isDone })

            setTitle('');
            setDescription('');
            setTime('');
            setReminder(false);

            setValidated(false);
        }
    }

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header as="h5">
                    <Container>
                        <Row style={{ alignItems: 'center' }}>
                            <Col className="text-center">
                                <label htmlFor="0"> Add Task </label>
                            </Col>
                            <Col md="auto">
                                {
                                    showToggled ?
                                        <HideToggle eventKey="0" update={setShowToggled}>Hide</HideToggle>
                                        :
                                        <ShowToggle eventKey="0" update={setShowToggled}>Show</ShowToggle>
                                }
                            </Col>
                        </Row>
                    </Container>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={formSubmit}>
                            <Form.Group className="mb-3" controlId="formTitleInput">
                                <Form.Label>Task title</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Task"
                                    maxLength="64"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a title.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDescriptionInput">
                                <Form.Label>Task description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDateTimeInput">
                                <Form.Label>Task time</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Date and time"
                                    value={time}
                                    onChange={(event) => setTime(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formReminderInput">
                                <Form.Check type="checkbox">
                                    <Form.Check.Input
                                        type="checkbox"
                                        checked={reminder}
                                        onChange={(event) => setReminder(event.currentTarget.checked)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <Form.Check.Label style={{ userSelect: 'none', cursor: 'pointer' }}>
                                        &nbsp; Set reminder <AiOutlineClockCircle />
                                    </Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

function ShowToggle({ children, eventKey, update }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
        update(true)
    });

    return (
        <Button variant="success" style={{ width: '100px' }} onClick={decoratedOnClick}>
            {children}
        </Button>
    );
}

function HideToggle({ children, eventKey, update }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
        update(false)
    });

    return (
        <Button variant="danger" style={{ width: '100px' }} onClick={decoratedOnClick}>
            {children}
        </Button>
    );
}