import React from 'react';
import {Card, CardTitle, CardText, CardBody, CardFooter, Button, Col, Row} from 'reactstrap';
import {Parallax} from 'react-scroll-parallax';
import './Projects.css';
import Project from './Project';

const projects = () => {
//TODO: create a single project component

    return (
        <div>
            <Parallax
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                className="body-color"
            >
                <div>
                            hoOLA
                            <Parallax offsetYMax={-20}
                                      offsetYMin={20}
                                      slowerScrollRate>
                                <Row  style={{paddingBottom:"20px"}}>
                                <Col md={{size:4, offset:2}}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Projects</CardTitle>
                                        <CardText>List of projects will go here

                                        </CardText>
                                    </CardBody>
                                    <CardFooter className="text-muted"> <Project/> </CardFooter>
                                </Card>

                                </Col>

                                <Col md={4}>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>Projects</CardTitle>
                                            <CardText>List of projects will go here
                                            </CardText>
                                        </CardBody>
                                        <CardFooter className="text-muted">Footer</CardFooter>
                                    </Card>
                                </Col>
                                </Row>

                                <Row>
                                    <Col md={{size:4, offset:2}}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>Projects</CardTitle>
                                                <CardText>List of projects will go here
                                                </CardText>
                                            </CardBody>
                                            <CardFooter className="text-muted">Footer</CardFooter>
                                        </Card>

                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>Projects</CardTitle>
                                                <CardText>List of projects will go here
                                                </CardText>
                                            </CardBody>
                                            <CardFooter className="text-muted">Footer</CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                            </Parallax>


                </div>
            </Parallax>

        </div>
    );


}

export default projects;



