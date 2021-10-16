import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { IoTrashBinSharp } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaPen } from 'react-icons/fa'

const Task = ({ task, onSetDone, onSetReminder, onRemove }) => {
  return (
    <Accordion.Item eventKey={task.id}>
      <Accordion.Header>
        {
          task.isDone ?
            <label htmlFor="task.id" style={{ textDecoration: 'line-through', cursor: 'pointer' }}>
              {task.title}
            </label>
            :
            <label htmlFor="task.id" style={{ cursor: 'pointer' }}>
              {task.title}
            </label>
        }
        &nbsp;
        {
          task.isDone ?
            <FaCheck style={{ color: 'green' }} /> : ''
        }
        {
          !task.isDone && task.reminder ?
            <AiOutlineClockCircle style={{ color: 'green' }} /> : ''
        }
      </Accordion.Header>
      <Accordion.Body>
        <Container>
          Title: &nbsp;
          <FaPen className="mb-1" style={{ color: 'gray', cursor: 'pointer', width: '15px' }} />
          <Form.Control
            type="text"
            className="mb-3"
            placeholder="Title"
            value={task.title}
            readOnly />

          Description: &nbsp;
          <FaPen className="mb-1" style={{ color: 'gray', cursor: 'pointer', width: '15px' }} />
          <Form.Control
            as="textarea"
            className="mb-3"
            rows={3}
            placeholder="empty"
            value={task.description}
            readOnly />
            Date & Time: &nbsp;
          <FaPen className="mb-1" style={{ color: 'gray', cursor: 'pointer', width: '15px' }} />
          <Form.Control
            type="text"
            className="mb-3"
            placeholder="Date and Time"
            value={task.time}
            readOnly />
          <Form.Group className="mb-3" controlId={"reminder." + task.id}>
            <Form.Check type="checkbox">
              <Form.Check.Input
                type="checkbox"
                disabled={task.isDone}
                checked={task.reminder}
                onChange={(event) => onSetReminder(task.id)}
                style={{ cursor: 'pointer' }}
              />
              <Form.Check.Label style={{ userSelect: 'none', cursor: 'pointer' }}>
                &nbsp; Set reminder <AiOutlineClockCircle />
              </Form.Check.Label>
            </Form.Check>
          </Form.Group>
          <Form.Group className="mb-3" controlId={"done." + task.id}>
            <Form.Check type="checkbox">
              <Form.Check.Input
                type="checkbox"
                checked={task.isDone}
                onChange={(event) => onSetDone(task.id)}
                style={{ cursor: 'pointer' }}
              />
              <Form.Check.Label style={{ userSelect: 'none', cursor: 'pointer' }}>
                &nbsp; Done
              </Form.Check.Label>
            </Form.Check>
          </Form.Group>
          <Button variant="outline-danger" onClick={(event) => onRemove(task.id)}>
            Delete &nbsp;
            <IoTrashBinSharp className="mb-1" style={{ color: 'red', cursor: 'pointer' }} />
          </Button>
        </Container>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default Task