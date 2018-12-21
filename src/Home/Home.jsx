import React, { Component } from 'react';
import NewProducts from './NewProducts';
import PopularCategories from './PopularCategories';
import axios from 'axios';

class Home extends Component{

    state = {
        filterKey:"",
        filterVal:"",

        products:[],

        categories:[]

    };

    getProducts = () => {
        let url = "http://backend.test/products";
        axios.get(url).then(product => {
            this.setState({
                products: product.data
            });
        }); 
    }

    getCategories = () => {
        let url = "http://backend.test/categories";
        axios.get(url).then(category => {
            this.setState({
                categories:category.data
            });
        }); 
    }

    componentDidMount = () =>{
        this.getCategories();
        this.getProducts();
        
    }

    render(){
        // const {filterKey,filterVal} = this.state;
        // console.log(this.state.products);
        // let productsData = this.state.products;
        // if(filterKey !== "") 
        // productsData.filter(product => product[filterKey] === filterVal);
        // const productsView  = productsData.map(product => {
        //         return (
        //             <Grid.Column key={product.id}>
        //                 <Card
        //                     image={product.image}
        //                     header={product.name}
        //                     meta={product.price}
        //                     description={product.description}
        //                     extra={product.brand}
        //                 />
        //             </Grid.Column>
        //         );
        //     });

        // let view;
        // if (productsData.length <= 0) {
        // view = <Header as='h1' />;
        // } else {
        // view = (
        //     <Grid relaxed columns={4}>
        //         {productsView}
        //     </Grid>
        // );
        // }

        return(
            <div className='home-wrapper'>
                <PopularCategories 
                    categories={this.state.categories}
                />
                <NewProducts />
                <div>
                    Mobile Phone
                </div>
                <div>
                    Headphone
                </div>
            </div>
        );
    };
};

export default Home;