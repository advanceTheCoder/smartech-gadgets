import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './Home.css';

const options = {
    0:{
        items:1,
        margin:5,
        loop:true,
        dots:false
    },
    600:{
        items:1,
        margin:5,
        loop:true,
        dots:false
    },
    1000:{
        items:1,
        margin:5,
        loop:true,
        dots:false
    }
};

class ProductImage extends Component{

    render(){
        let productImageView=this.props.products
        .map(product=>{
            return(
                <div key={product.id} >
                    <div className="rmdb-heroimage">
                        <img src={product.image} alt='test' style={{height:'inherit'}}/>
                    </div>
                    <div className="rmdb-heroimage-content">
                        <div className="rmdb-heroimage-text">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <OwlCarousel
                    className="owl-theme"
                    autoplay='true'
                    responsiveClass='true'
                    responsive={options}
                >
                    {productImageView}
                </OwlCarousel>
        )
    }
}


export default ProductImage;