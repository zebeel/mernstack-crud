import React from 'react';
import logo from './logo.svg';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateNote from "./components/create-note.component";
import EditNote from "./components/edit-note.component";
import NoteList from "./components/note-list.component";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/create-note"} className="nav-link">
                MERN Stack CRUD App
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-note"} className="nav-link">
                  Create Note
                </Link>
              </Nav>
              <Nav>
                <Link to={"/note-list"} className="nav-link">
                  Note List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateNote} />
                <Route path='/create-note' component={CreateNote} />
                <Route path='/edit-note/:id' component={EditNote} />
                <Route path='/note-list' component={NoteList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
