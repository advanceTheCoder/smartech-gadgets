import React, { Component } from 'react';
import NewProducts from './NewProducts';
import PopularCategories from './PopularCategories';
import ProductImage from './ProductImage';
import axios from 'axios';

class Home extends Component{

    state = {
        filterKey:"",
        filterVal:"",

        products:[],
        product_image:null,
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
        return(
            <div className='home-wrapper'>
                {this.state.products?
                    <div>
                    <ProductImage
                        products={this.state.products}
                    />
                    </div>:null}
                <div>
                    <PopularCategories 
                        categories={this.state.categories}
                    />
                </div>
                <div>
                    <NewProducts 
                        categories={this.state.categories}
                    />
                </div>
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