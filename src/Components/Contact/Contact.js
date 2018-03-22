import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import './Contact.css';
import dp from '../../assets/img/dp.jpg';
import {Row, Col, Card, CardHeader, CardBody, CardTitle, Button, CardFooter, CardText} from 'reactstrap';


const contact = () =>{
    return(
        <div>
            <Parallax
                className="body-col"
                offsetYMax={50}
                offsetYMin={-50}
                slowerScrollRate
            >

                <div className="display-image">
                    <img src={dp} alt="dp"/>
                </div>

                <Row>
                    <Col md={12}>
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
            </Parallax>
        </div>
    );
}

export default contact;