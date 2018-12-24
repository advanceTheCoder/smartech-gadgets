import React, { Component } from 'react';
import {Card, Grid, Header } from 'semantic-ui-react';
import OwlCarousel from 'react-owl-carousel';

const options = {
    0:{
        items:1,
        nav:true
    },
    600:{
        items:2,
        nav:false
    },
    1000:{
        items:4,
        margin:5,
        loop:true,
        dots:false
    }
};

class NewProducts extends Component{
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
            <Grid relaxed columns={3} className='new-products'>
                <OwlCarousel
                    className="owl-theme"
                    autoplay='true'
                    responsiveClass='true'
                    responsive={options}
                >
                    {categoryView}
                </OwlCarousel>
            </Grid>
        )
        return(
            <div>
                <Header as='h1'>
                    New Products
                </Header>
                {view}
            </div>
        );     
    };
};

export default NewProducts;
