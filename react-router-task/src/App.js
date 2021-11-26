import React, { useState } from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import userImg from './user.png';

import Secrets from "./components/Secrets";
import Friend from "./components/Friend";
import Friends from "./components/Friends";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Image src={user && user.imageURL ? user.imageURL : userImg} width="32" roundedCircle />{' '}
              Home
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/profile" style={{ textDecoration: "none", color: "gray" }}>Profile</Link>
            &nbsp;&nbsp;
            <Link to="/friends" style={{ textDecoration: "none", color: "gray" }}>Friends</Link>
            <Navbar.Toggle />
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            {
              user
                ?
                <NavDropdown id="menu"  style={{ color: "white" }} title={"Signed in as: " + user.name}>
                  <NavDropdown.Item href="/">Log out</NavDropdown.Item>
                </NavDropdown>
                :
                <Navbar.Text>
                  <Link to='/login'>Log in</Link>
                </Navbar.Text>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/secrets" element={<Secrets />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" replace />} />
        <Route path="/friends" element={user ? <Friends user={user} /> : <Navigate to="/login" replace />}>
          <Route path=":friendID" element={<Friend user={user} />} />
        </Route>
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </React.Fragment>
  )
}