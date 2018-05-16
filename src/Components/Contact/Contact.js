import React, {Component} from 'react';
import './Contact.css';
import dp from '../../assets/img/dp.jpg';
import {Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Alert, FormFeedback} from 'reactstrap';
import axios from 'axios';
import Success from './Success';


class Contact extends Component {

    state = {
        emailData:{
        name: '',
        email: '',
        message: ''
        },
        alert: false,
        formInvalid: false
    };


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const invalid =this.validation();
        if(!invalid){
            this.postRequest();
        }
        console.log(this.state.nameError);
    };

    validation() {
        const {name, email, message} = this.state;
        let errors = {};
        let invalid = false;

        //For name validation
        if(typeof name === 'undefined'){
            invalid = true;
            errors.nameError = "Please put your name so I can get to know you";
        }
        else if(name.length < 3){
            invalid = true;
            errors.nameError = "Name must be at least 3 character long";
        }
        this.setState({
            ...this.state,
            nameError: errors.nameError,
            formInvalid: true
        });

        return invalid;

    }


      postRequest() {
          const {name, email, message} = this.state;
          const form = axios.post('https://mysite-back.herokuapp.com/api/email', {
              name,
              email,
              message
          }).then(function (response) {
              console.log(response);
              return response
          });
          //TODO: handle more appropriately
          // if (form.data.success = 'true') {
          //     this.setState({
          //         ...this.emailData,
          //         alert: true
          //     })
      // }

        //clear form values
        this.setState({
            emailData: {
                name: '',
                email: '',
                message: ''
            },
            nameError: '',
            emailError: '',
            messageError: ''
        })
    }

    render() {
        return (
            <div className="body-col">
                {/*{console.log(this.state.alert, "outsite successc ompnent")}*/}
                {/*<Success alert = {this.state.alert}/>*/}
                <div className="display-image">
                    {/*<img src={dp} alt="dp"/>*/}
                </div>


                <Col md={{size: 8, offset: 2}} style={{paddingTop: "20px"}}>
                    <Card>
                        <CardHeader tag="h3">Get in touch!</CardHeader>
                        <CardBody>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <FormGroup row>
                                    <Label for="name" sm={2}>Name:</Label>
                                    <Col sm={10}>
                                        <Input type="name" name="name" placeholder="Your awesome name"
                                               invalid = {this.state.formInvalid} valid ={!this.state.formInvalid}
                                               onChange={this.handleChange}/>
                                        <FormFeedback>{this.state.nameError}</FormFeedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Email:</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" placeholder="Email"
                                               onChange={this.handleChange} invalid/>
                                        <FormFeedback>{this.state.emailError}</FormFeedback>
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