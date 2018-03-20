import React from 'react';
import {Card, CardHeader, CardTitle, CardText, CardBody, CardFooter, Button, Col} from 'reactstrap';
import {Parallax} from 'react-scroll-parallax';
import './Projects.css'

const projects = () => {

    return (
        <div>
            <Parallax
                offsetYMax={50}
                offsetYMin={-50}
                slowerScrollRate
                className="body-color"
            >
                <div>Hoola
                    <Col md={6}>
                        <Parallax offsetXMax={-50}
                                  offsetXMin={50}
                                  slowerScrollRate>
                            <Card>
                                <CardBody>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional
                                        content.</CardText>
                                    <Button>Go somewhere</Button>
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



