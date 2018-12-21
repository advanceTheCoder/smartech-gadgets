import React, { Component, Fragment } from 'react';
import axios from 'axios'
import './Products.css';
import { Tab, Header } from 'semantic-ui-react';
import categories from './Categories';


class Brands extends Component {

    state = {
        
        products:[],
        name:'',
        category:'',
        price:'',
        image:[],
        description:'',
        brand:''

    };
    
    getProducts = () => {
        let url ="http://backend.test/products";
        axios.get(url).then(response => {
            this.setState({
                products: response.data
            });
        }); 
    }

    componentDidMount = () =>{
        this.getProducts();
    }

    render(){

        return(
            <Fragment>
                <Header as='h1' textAlign='center'>
                    {this.props.match.params.brand}
                </Header>
                <Tab 
                    menu={{ pointing: true }} 
                    panes={categories(this.state.products,this.props.match.params.brand)}
                />
            </Fragment>
        );
    };
};


export default Brands;