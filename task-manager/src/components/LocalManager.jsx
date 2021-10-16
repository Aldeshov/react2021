import React from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'

import Task from './Task.jsx'
import { AddForm } from './AddForm'

import { HiOutlineClipboardCheck } from 'react-icons/hi'

let TYPE = "local"

export default class LocalManager extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }

    add = (data) => {
        this.setState({
            tasks: [
                ...this.state.tasks,
                {
                    id: this.state.tasks.length ? (Math.max.apply(Math, this.state.tasks.map(function (o) { return o.id; })) + 1) : 1,
                    title: data.title,
                    description: data.description,
                    time: data.time,
                    isDone: false,
                    reminder: data.reminder
                },
            ]
        })
    }

    remove = (id) => {
        this.setState({
            tasks: [
                ...this.state.tasks.filter(task => {
                    return task.id !== id
                })
            ],
        })
    }

    toggleReminder = (id) => {
        this.setState({
            tasks: [
                ...this.state.tasks.map(task => {
                    if (task.id === id) {
                        task.reminder = !task.reminder
                    }
                    return task
                })
            ],
        })
    }

    toggleDone = (id) => {
        this.setState({
            tasks: [
                ...this.state.tasks.map(task => {
                    if (task.id === id) {
                        task.isDone = !task.isDone
                    }
                    return task
                })
            ],
        })
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="mt-3">
                        <h1>
                            <Badge bg="secondary">Task Manager</Badge>
                        </h1>
                    </Row>
                    <Row>
                        <h3>Tasks <Badge>{TYPE}</Badge></h3>
                        <label>
                            All tasks:  &nbsp;
                            <strong>
                                {this.state.tasks.length}
                            </strong>
                            <HiOutlineClipboardCheck style={{ color: 'blue' }} />
                        </label>

                        <label>
                            Undone tasks: &nbsp;
                            <strong>
                                {this.state.tasks.filter(task => !task.isDone).length}
                            </strong>
                            <HiOutlineClipboardCheck style={{ color: 'orange' }} />
                        </label>
                    </Row>
                    <Row className="mt-3">
                        <AddForm onAdd={this.add} />
                    </Row>
                    <Row className="mt-3">
                        {
                            !this.state.tasks.length ?
                                <label className="text-muted text-center"> No tasks to show </label>
                                :
                                <h5>Tasks</h5>
                        }
                        <Accordion defaultActiveKey="0">
                            {this.state.tasks.map(task => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    onSetDone={this.toggleDone}
                                    onSetReminder={this.toggleReminder}
                                    onRemove={this.remove}
                                />
                            ))}
                        </Accordion>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}