import React from 'react';
import {Card, CardTitle, CardText, CardBody, CardFooter, Button, Col} from 'reactstrap';
import {Parallax} from 'react-scroll-parallax';
import './Projects.css'

const projects = () => {

    return (
        <div>
            <Parallax
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                className="body-color"
            >
                <div>
                    <Col md={12}>
                        hoOLA
                        <Parallax offsetYMax={-20}
                                  offsetYMin={20}
                                  slowerScrollRate>
                            <Card>
                                <CardBody>
                                    <CardTitle>Projects</CardTitle>
                                    <CardText>List of projects will go here
                                        </CardText>
                                </CardBody>
                                <CardFooter className="text-muted">Footer</CardFooter>
                            </Card>
                        </Parallax>


                    </Col>

                </div>
            </Parallax>

            <Parallax>

                something here
            </Parallax>
        </div>
    );


}

export default projects;



