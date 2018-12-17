import React from 'react';
import { Tab, Grid, Card } from 'semantic-ui-react';
import './Products.css';

const categories = (products,brand)=>{
    return products
    .filter(product => product.brand === brand)
        .map( product =>{
            return {
            menuItem: product.category,
            render: () =>
                <Tab.Pane className='product-tab'>
                    <Grid.Column key={product.id}>
                        <Card
                            image={product.image}
                            header={product.name}
                            meta={product.price}
                            description={product.description}
                            extra={product.brand}
                            className='product-card'
                        />
                    </Grid.Column>
                </Tab.Pane>
            }
        })
    }

export default categories;


