import React from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'

import Task from './Task.jsx'
import { AddForm } from './AddForm'

import { HiOutlineClipboardCheck } from 'react-icons/hi'

let TYPE = "remote"
let BASE_URL = "http://localhost:8000/tasks" // API - db.json

export default class RemoteManager extends React.Component {
    state = {
        tasks: [],
        loading: true
    }

    componentDidMount = () => {
        fetch(`${BASE_URL}`)
            .then((raw) => raw.json())
            .then(res =>
                this.setState({
                    tasks: res,
                    loading: false
                }))
            .catch((error) => {
                console.log(error.message)
                alert("Fetch error! API (json) Server may be not running. See console logs");
            })
    }

    fetchTask = async (id) => {
        const res = await fetch(`${BASE_URL}/${id}`)
        const data = await res.json()
        return data
    }

    add = async (task) => {
        const res = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })

        const data = await res.json()
        this.setState({
            tasks: [
                ...this.state.tasks,
                data
            ]
        })
    }

    remove = async (id) => {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        })

        res.status === 200 ?
            this.setState({
                tasks: [
                    ...this.state.tasks.filter(task => {
                        return task.id !== id
                    })
                ],
            })
            :
            alert('Error Deleting This Task')
    }

    toggleReminder = async (id) => {
        const task = await this.fetchTask(id)
        const updatedTask = { ...task, reminder: !task.reminder }

        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        })

        const data = await res.json()

        this.setState({
            tasks: [
                ...this.state.tasks.map(task => {
                    if (task.id === id) {
                        task.reminder = data.reminder
                    }
                    return task
                })
            ],
        })
    }

    toggleDone = async (id) => {
        const task = await this.fetchTask(id)
        const updatedTask = { ...task, isDone: !task.isDone }

        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        })

        const data = await res.json()
        this.setState({
            tasks: [
                ...this.state.tasks.map(task => {
                    if (task.id === id) {
                        task.isDone = data.isDone
                    }
                    return task
                })
            ],
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.loading ?
                        <label className="text-muted">
                            Loading...
                        </label>
                        :
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
                }
            </React.Fragment>
        )
    }
}