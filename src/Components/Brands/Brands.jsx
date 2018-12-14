import React, { Component } from 'react';
import axios from 'axios';
import './Brands.css';

class Brands extends Component {

    state = {
        products:[],
        product_name:'',
        product_category:''
    };

    getProducts = () => {
        let url =
        "http://backend.test/products";
        axios.get(url).then(response => {
            this.setState({
                products: response
            });
        }); 
    }

    updateSelectedCategory(event) {
        this.fetchArticle(event.target.getAttribute('data-value'));
    }
    
    getProduct(id) {

        this.serverRequest = axios.get('http://backend.test/node/' + id + '?_format=json')
        .then(function(result){
            this.setState({
                product_name: result.name,
                product_category: result.category
            });
        })
    }

    componentDidMount = () =>{
        this.getProduct();
        this.getProducts();
    }

    render(){
        return(
            <div>
                Brands
            </div>
        );
    };
};


export default Brands;