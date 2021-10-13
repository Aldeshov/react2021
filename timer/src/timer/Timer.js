import React from "react";

import './Timer.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default class Timer extends React.Component{
  timer;
  state = {
    currentTime: 0
  }

  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.setState((state) => ({
        currentTime: state.currentTime + 1
      }))
    }, 1000);
  }

  componentDidUpdate = () => {
    console.log(this.state.currentTime)
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Card className="timer p-5">
        <span>Timer component</span>
        <h1>
          Seconds: {this.state.currentTime}
        </h1>
      </Card>
    )
  }
}