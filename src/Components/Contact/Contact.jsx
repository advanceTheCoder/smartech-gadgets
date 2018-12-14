import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import './Contact.css'

class Contact extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        subject: '',
        message: ''
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render(){

        const {username, email, password, subject, message} = this.state;

        return(
            <div>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' className='register-form'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' textAlign='center'>
                            Contact Us
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input name = 'username' value={username}  icon='user' iconPosition='left' placeholder='Username' onChange={this.handleChange}/>
                                <Form.Input name = 'email' value={email} icon='envelope' iconPosition='left' placeholder='E-mail address' onChange={this.handleChange}/>
                                <Form.Input name = 'password' value={password}  icon='lock' iconPosition='left'placeholder='Password' type='password' onChange={this.handleChange}/>
                                <Form.Input name = 'subject' value={subject} icon='envelope' iconPosition='left'placeholder='Subject' onChange={this.handleChange}/>
                                <Form.TextArea name = 'message' value={message} placeholder='Message' onChange={this.handleChange}/>
                                <Button type='submit' fluid size='large'>
                                    Submit
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            <Link to='/' >Not Now</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    };
    
};

export default Contact;