import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import './Contact.css';
import dp from '../../assets/img/dp.jpg';
import { Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input} from 'reactstrap';


const contact = () =>{
    return(
        <div>
            <Parallax
                className="body-col"
                offsetYMax={50}
                offsetYMin={-50}
                slowerScrollRate
            >
                <div className="display-image" >
                    <img src={dp} alt="dp"/>
                </div>


                    <Col md={{size:8, offset:2}} style={{paddingTop: "20px"}}>
                        <Card>
                            <CardHeader tag="h3">Get in touch!</CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="name" sm={2}>Name:</Label>
                                        <Col sm={10}>
                                            <Input type="name" name="name" id="exampleEmail" placeholder="Your awesome name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>Email:</Label>
                                        <Col sm={10}>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleText" sm={2}>Message:</Label>
                                        <Col sm={10}>
                                            <Input type="textarea" name="text" id="exampleText" />
                                        </Col>
                                    </FormGroup>

                                    <Button>Send</Button>
                                </Form>

                            </CardBody>
                        </Card>
                    </Col>

            </Parallax>
        </div>
    );
}

export default contact;