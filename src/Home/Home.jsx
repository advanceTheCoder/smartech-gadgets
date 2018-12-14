import React, { Component } from 'react';
import { Card, Icon, Grid, Header } from 'semantic-ui-react';
import pp from '../Images/pp.jpeg'

const extra = (
    <Header as='h5'>
      <Icon name='user' />
      16 Friends
    </Header>
  )

class Home extends Component{

    render(){
        return(
            <div className='home-wrapper'>
                <Grid relaxed columns={4}>
                    <Grid.Column>
                        <Card
                            image={pp}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={extra}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Card
                            image={pp}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={extra}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Card
                            image={pp}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={extra}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Card
                            image={pp}
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={extra}
                        />
                    </Grid.Column>
                </Grid>
            </div>
        );
    };
};

export default Home;