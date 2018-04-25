import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardBody, CardFooter, Button, Col, Row, Container} from 'reactstrap';
import './Projects.css';
import Project from './Project';
import ProjectsDetail from '../../Containers/ProjectsDetail';

class Projects extends Component {

// TODO: render offset programmatically
    render() {
        return (
            <div className="body-color">
                    <div>
                        hoOLA

                            <Row>
                                {ProjectsDetail.projects.map(project => (

                                    <Col key={project.id}
                                         md={{size: 4, offset: project.offsetVal }}
                                         style={{padding: "20px"}}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>{project.title}</CardTitle>
                                                <CardText>
                                                    {project.description}
                                                </CardText>
                                            </CardBody>
                                            <CardFooter className="text-muted">
                                                <Project projectDetail ={project}/>
                                            </CardFooter>
                                        </Card>
                                    </Col>


                                ))}
                            </Row>

                    </div>

            </div>
        );
    }
}

export default Projects;



