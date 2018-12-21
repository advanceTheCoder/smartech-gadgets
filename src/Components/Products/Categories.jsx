import React from 'react';
import { Tab, Grid, Card, Menu} from 'semantic-ui-react';
import './Products.css';

const categories = (products,brand)=>{
    return products
    .filter(product => product.brand === brand)
        .map( product =>{
            return {
            
                menuItem: (
                    <Menu.Item key={product.id}>
                        {product.category}
                    </Menu.Item>
                ),
                render: () =>
                    <Tab.Pane>
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


