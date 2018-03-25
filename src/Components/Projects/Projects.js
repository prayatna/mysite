import React from 'react';
import {Card, CardTitle, CardText, CardBody, CardFooter, Button, Col, Row} from 'reactstrap';
import {Parallax} from 'react-scroll-parallax';
import './Projects.css';
import Project from './Project';
import ProjectsDetail from '../../Containers/ProjectsDetail';

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

                                    {ProjectsDetail.projects.map(project=>(
                                        <Col md={{size:6}} style={{padding:"20px"}}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>{project.title}</CardTitle>
                                                <CardText>{project.description}

                                                </CardText>
                                            </CardBody>
                                            <CardFooter className="text-muted"> <Project/> </CardFooter>
                                        </Card>
                                        </Col>
                                    ))}

                                </Row>


                            </Parallax>


                </div>
            </Parallax>

        </div>
    );


}

export default projects;



