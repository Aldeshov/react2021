import Timer from './timer/Timer';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  state = {
    removeTimerComponent: false
  }

  render() {
    return (
      <Container>
        <Card className="p-3">
          <span>App Component</span>

          { !this.state.removeTimerComponent && <Timer /> }

          { this.state.removeTimerComponent ?
            <Alert variant="success" className="mt-3">Successfully removed!</Alert>
            :
            <Button variant="primary" onClick={() => this.setState({removeTimerComponent: true})}>
              Stop and Remove
              <strong>Timer Component</strong>
            </Button>
          }
        </Card>
      </Container>
    );
  }
}

export default App;
