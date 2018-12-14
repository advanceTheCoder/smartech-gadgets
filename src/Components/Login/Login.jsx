import React, { Component }from 'react';
import { Link, Redirect} from "react-router-dom";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';
import './Login.css'

class Login extends Component {

    state = {
        username: '',
        password: '',
        redirect: false
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://backend.test/user/login?_format=json', {
            name: this.state.username,
            pass: this.state.password
        })
        .then(response => {
            this.setState({
            'success': 'Login successful',
            'error': ''
            });

            localStorage.setItem('username', response.data.current_user.name);
            localStorage.setItem('uid', response.data.current_user.uid);
            localStorage.setItem('csrf_token', response.data.csrf_token);
            localStorage.setItem('logout_token', response.data.logout_token);
            localStorage.setItem('auth', window.btoa(this.state.username + ':' + this.state.password));

            this.setState({redirect: true});
        });
        
    }

    render(){
        const {username,password,redirect} = this.state;

        if (redirect) {
            return (
                <Redirect to="/" />
            );
        }
        return(
            <div>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'  className='login-form'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' textAlign='center'>
                            Login
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input name = 'username' value={username} icon='envelope' iconPosition='left' placeholder='Username' onChange={this.handleChange}/>
                            <Form.Input name = 'password' value={password}  icon='lock' iconPosition='left'placeholder='Password' type='password' onChange={this.handleChange}/>               
                            <Button fluid size='large'>
                            Login
                            </Button>
                        </Segment>
                        </Form>
                        <Message>
                            <Link to='/user/register' >I don't have an <strong>Account</strong></Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    };
};

export default Login;