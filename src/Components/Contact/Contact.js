import React, {Component} from 'react';
import './Contact.css';
import dp from '../../assets/img/dp.jpg';
import { Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import axios from 'axios';
import Success from './Success';


class Contact extends Component{

    state ={
        emailData:{
            name:'',
            email:'',
            message:''
        },
        alert: false
    };


    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    async handleSubmit(e){
        e.preventDefault();
        const {name,email,message} =this.state;
        const form = await axios.post('https://mysite-back.herokuapp.com/api/email',{
            name,
            email,
            message
        }).then(function(response){
            console.log(response);
            return response
        });

        //TODO: handle more appropriately
        if(form.data.success = 'true'){
            this.setState({
                ...this.emailData,
                alert:true
            })
        }

    }

    render(){
        return(
            <div className="body-col">
                    {console.log(this.state.alert,"outsite successc ompnent")}
                    {/*<Success alert = {this.state.alert}/>*/}
                    <div className="display-image" >
                        <img src={dp} alt="dp"/>
                    </div>


                    <Col md={{size:8, offset:2}} style={{paddingTop: "20px"}}>
                        <Card>
                            <CardHeader tag="h3">Get in touch!</CardHeader>
                            <CardBody>
                                <Form onSubmit ={this.handleSubmit.bind(this)}>
                                    <FormGroup row>
                                        <Label for="name" sm={2}>Name:</Label>
                                        <Col sm={10}>
                                            <Input type="name" name="name"  placeholder="Your awesome name"  onChange ={this.handleChange}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>Email:</Label>
                                        <Col sm={10}>
                                            <Input type="email" name="email"  placeholder="Email" onChange ={this.handleChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="exampleText" sm={2}>Message:</Label>
                                        <Col sm={10}>
                                            <Input type="textarea" name="message"  onChange ={this.handleChange} />
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