import React, {Component} from 'react';
import './Contact.css';
import dp from '../../assets/img/dp.jpg';
import {Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import Success from './Success';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            sentMessageAlert: {
                hasValue: false,
                showSuccess: false,
                showFailed: false,
            }
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit= (e) => {
        e.preventDefault();
        const {name, email, message} = this.state;
        axios.post('https://mysite-back.herokuapp.com/api/email', {
            name,
            email,
            message
        }).then(response => {
            if (response.data.success === 'true') {
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    sentMessageAlert: {
                        showSuccess: true,
                        showFailed: false,
                        hasValue: true
                    }

                });
            }
            else {
                this.setState({
                    ...this.state,
                    sentMessageAlert: {
                        showSuccess: false,
                        showFailed: true,
                        hasValue: true
                    }

                });
            }
            return response
        })
            .catch(error=>{
                this.setState({
                    ...this.state,
                    sentMessageAlert: {
                        showSuccess: false,
                        showFailed: true,
                        hasValue: true
                    }

                });
                console.log(error)
            });
        //TODO: handle more appropriately
    };

    //timer for alert banner
    drawAlert() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                sentMessageAlert:{
                    hasValue: false,
                    showSuccess: false,
                    showFailed: false
                }})
        }, 4000); // show alert banner for just 4 seconds
        return (
            <Success alert={this.state.sentMessageAlert} />
        )
    }

    render() {
        let alertBanner = '';
        if (this.state.sentMessageAlert.hasValue) {
            alertBanner = <Success alert={this.state.sentMessageAlert}/>;
            this.drawAlert();
        }
        return (
            <div className="body-col">
                {alertBanner}
                <div className="display-image">
                    <img src={dp} alt="dp"/>
                </div>


                <Col md={{size: 8, offset: 2}} style={{paddingTop: "20px"}}>
                    <Card>
                        <CardHeader tag="h3">Get in touch!</CardHeader>
                        <CardBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label for="name" sm={2}>Name:</Label>
                                    <Col sm={10}>
                                        <Input type="name" name="name" placeholder="Your awesome name"
                                               onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Email:</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" placeholder="Email"
                                               onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleText" sm={2}>Message:</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="message" onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>

                                <Button>Send</Button>
                            </Form>

                        </CardBody>
                    </Card>
                </Col>
            </div>

        );
    }
}

export default Contact;