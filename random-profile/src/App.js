import React from 'react';
import Profile from './Profile/Profile.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';

export default class App extends React.Component {
  state = {
    persons: [
      {
        name: "Sarah",
        image: "https://mh-1-stockagency.panthermedia.net/media/previews/0010000000/10956000/10956682_high.jpg",
        country: "US",
        age: 24,
        skills: ["Design", 'User experience', "Illustrations"],   
      },
      {
        name: "Martha",
        image: "https://www.photocase.com/photos/3649621-portrait-of-a-pretty-woman-smiling-outdoors-smile-female-photocase-stock-photo-large.jpeg",
        country: "UK",
        age: 27,
        skills: ["Content making", 'SMM', "taking surveys"],   
      },
      {
        name: "Alex",
        image: "https://www.pngitem.com/pimgs/m/128-1282867_businessperson-african-american-black-stock-photography-african-business.png",
        country: "South Africa",
        age: 35,
        skills: ["Management", 'Client service', "Presentation"],   
      },
      {
        name: "Martin",
        image: "https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png",
        country: "Canada",
        age: 27,
        skills: ["Accounting", 'Calculations', "Mathematical analysis"],   
      }
    ],
    profile : {
      name: "Alex",
      image: "https://www.pngitem.com/pimgs/m/128-1282867_businessperson-african-american-black-stock-photography-african-business.png",
      country: "South Africa",
      age: 35,
      skills: ["Management", 'Client service', "Presentation"],   
    }
  }

  randomProfile() {
    var index = Math.floor(Math.random() * (Math.floor(this.state.persons.length) - Math.ceil(0))) + Math.ceil(0);
    console.log("Random integer: " + index);
    this.setState({
      profile : this.state.persons[index]
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="App p-5">
          <h1 className="mb-3">Random profile - React Application</h1>
          <Profile person={this.state.profile} />
          <Button className="mt-3" variant="primary" onClick={() => this.randomProfile()}>Random Profile</Button>
        </div>
      </React.Fragment>
    )
  }
}