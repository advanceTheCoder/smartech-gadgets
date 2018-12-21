import React, { Component } from 'react';
import {Card, Grid, Header } from 'semantic-ui-react';

class PopularCategories extends Component{
    render(){

        console.log(this.props.categories)
        let categoryView = this.props.categories
        .map(category=>{
            return(
                <Grid.Column key={category.id}>
                    <Card 
                        image={category.image}
                        header={category.name}
                    />
                </Grid.Column>
            );
        });
        let view;
        view=(
            <Grid relaxed columns={4}>
                {categoryView}
            </Grid>
        )
        return(
            <div>
                <Header as='h1'>
                    Popular Categories
                </Header>
                {view}
            </div>
        );     
    };
};

export default PopularCategories;
