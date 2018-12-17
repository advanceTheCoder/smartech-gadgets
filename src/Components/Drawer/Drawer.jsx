import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { Menu, Dropdown,Header,Sidebar,Segment,Container} from 'semantic-ui-react';
import Menus from '../Menu/Menus';
import axios from 'axios';
import './Drawer.css';

class Drawer extends Component {

    state = {

        brands:[],
        product_name:'',
        product_category:''
    };

    getProducts = () => {
        let url = "http://backend.test/brands";
        axios.get(url).then(response => {
            this.setState({
                brands: response.data
            });
        }); 
    }

    componentDidMount = () =>{
        this.getProducts();
    }

    render() {
        
        const { animation, dimmed, direction, visible } = this.props;
        const  {brands} = this.state;

        let brandsMenu = brands.map(brand => {
                return (
                    <Dropdown.Item key={brand.id} >
                        <NavLink to={brand.brand}>
                            {brand.brand}
                        </NavLink>
                    </Dropdown.Item>
                );
            });

        let view;
        if (brandsMenu.length <= 0) {
        view = <Header as='h1' />;
        } else {
        view = (
        
            <Dropdown.Menu>
                {brandsMenu}
            </Dropdown.Menu>
        );
        }

        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation={animation}
                        direction={direction}
                        icon='labeled'
                        inverted
                        vertical
                        className='header-slider'
                        visible={visible}
                        width='thin'
                        
                    >
                        <Menu.Item className='slider-content'>
                            <Header as='h5'>
                                <Link to='/'>
                                    Home
                                </Link>
                            </Header>
                        </Menu.Item>
                        <Menu.Item className='slider-content'>
                            <Header as='h5'>
                                <Dropdown text='Brands' simple >
                                    {view}
                                </Dropdown>
                            </Header>
                        </Menu.Item >
                        <Menu.Item className='slider-content'>
                            <Header as='h5'>
                                <Link to='/blog'>
                                    Blog
                                </Link>
                            </Header>
                        </Menu.Item>
                        <Menu.Item className='slider-content'>
                            <Header as='h5'>
                                <Link to='/about'>
                                    About
                                </Link>
                            </Header>
                        </Menu.Item>
                        <Menu.Item className='slider-content'>
                            <Header as='h5'>
                                <Link to='/contact'>
                                    Contact
                                </Link> 
                            </Header>
                        </Menu.Item>
                        <Menu.Item  className='slider-content'>
                        <Header as='h5'>
                            {this.props.user}
                        </Header>
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={dimmed && visible}>
                        <Container fluid>
                            <Segment className='drawer-segment' basic>
                                <Menus />
                            </Segment>
                        </Container>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>  
        );
    }
};

export default Drawer;