import React, { Component } from 'react';
import './App.css';
import Intro from '../Components/Intro/Intro';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import {Col, Row, Card, CardFooter, CardTitle, CardHeader, CardBody, Button, CardText} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Intro/>
          <Projects/>
          <Contact>
              <Row>
                  <Col md={6}>
                      This is my website.

                      <Card>
                          <CardHeader tag="h3">Featured</CardHeader>
                          <CardBody>
                              <CardTitle>Special Title Treatment</CardTitle>
                              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                              <Button>Go somewhere</Button>
                          </CardBody>
                          <CardFooter className="text-muted">Footer</CardFooter>
                      </Card>
                  </Col>
              </Row>
          </Contact>

      </div>
    );
  }
}

export default App;
