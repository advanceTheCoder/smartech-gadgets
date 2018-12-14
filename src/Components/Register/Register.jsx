import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';
import './Register.css'

class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        success: '',
        error: '',
        redirect: false
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (event) =>{

        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                'success': '',
                'error': 'Passwords do not match'
            });
            return;
        }

        axios.post('http://backend.test/user/register?_format=json', {
            name: [{"value": this.state.username}],
            mail: [{"value": this.state.email}],
            pass: [{"value": this.state.password}]
        })
        .then(response =>{
            this.setState({redirect: true});
        });
    }

    render(){

        const {username, email, password, confirmPassword,redirect} = this.state;

        if (redirect) {
            return (
                <Redirect to="/user/login" />
            );
        }

        return(
            <div>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' className='register-form'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' textAlign='center'>
                            Register Account
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input name = 'username' value={username}  icon='user' iconPosition='left' placeholder='Username' onChange={this.handleChange}/>
                                <Form.Input name = 'email' value={email} icon='envelope' iconPosition='left' placeholder='E-mail address' onChange={this.handleChange}/>
                                <Form.Input name = 'password' value={password}  icon='lock' iconPosition='left'placeholder='Password' type='password' onChange={this.handleChange}/>
                                <Form.Input name = 'confirmPassword' value={confirmPassword} icon='lock' iconPosition='left'placeholder='Confirm Password' type='password' onChange={this.handleChange}/>
                                <Button type='submit' fluid size='large'>
                                Register
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            <Link to='/user/login' >Already have <strong>Account</strong></Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    };
    
};

export default Register