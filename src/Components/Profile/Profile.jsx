import React, { Component } from 'react';
import axios from 'axios';
import { Segment, Header,Grid } from 'semantic-ui-react';

class Profile extends Component {

    state = {
        name: '',
        email: '',
        date: ''
    }

    componentDidMount() {
        let uid = localStorage.getItem('uid');
        let auth = localStorage.getItem('auth');
        this.serverRequest = axios.get( 'http://backend.test/user/' + uid + '?_format=json', {
            headers: {"Authorization":"Basic " + auth}
        })
        .then(result =>{
        let userDate = new Date(parseInt(result.data.created["0"].value, 10)*1000);
        this.setState({
            'name': result.data.name["0"].value,
            'email': result.data.mail["0"].value,
            'date': userDate.toISOString()
        });
        })
    }

    render(){
        return (
        
            <div>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'  className='login-form'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' textAlign='center'>
                            Profile
                        </Header>
                        <Segment stacked>
                            <Header as='h5'>Username: {this.state.name}</Header>
                            <Header as='h5'>Email: {this.state.email}</Header>
                            <Header as='h5'>Date: {this.state.date}</Header>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Profile
