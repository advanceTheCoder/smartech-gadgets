import React, { Component } from 'react';
import { NavLink,Link, Switch, Route } from 'react-router-dom';
import { Menu, Input, Dropdown,Header,Sidebar,Segment,Icon,Button, Container} from 'semantic-ui-react';
import Home from '../../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Brands from '../Brands/Brands';
import axios from 'axios';
import './HeaderBar.css';

class HeaderBar extends Component {

    state = {

        username: localStorage.getItem('username'),
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false,
        products:[],
        product_name:'',
        product_category:''
    };

    getProducts = () => {
        let url =
        "http://backend.test/products";
        axios.get(url).then(response => {
            this.setState({
                products: response.data
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

    handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible })

    userLinks = () => {

        let loggedIn = localStorage.getItem('auth');
        let userLinkTitle = this.state.username ? this.state.username : 'User';
        
        if (loggedIn) {
            return (
                <Dropdown text={userLinkTitle} simple>
                    <Dropdown.Menu className='dropdown-content'>
                        <Dropdown.Item>Profie</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            );
        }
        else {
            return (
                <Dropdown text={userLinkTitle} simple>
                    <Dropdown.Menu className='dropdown-content' >
                        <Dropdown.Item><Link to='/user/register'>Register</Link></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item><Link to='/user/login'>Login</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            );
        }
    }

    render() {
        
        const { animation, dimmed, direction, visible } = this.state;
        const vertical = direction === 'bottom' || direction === 'top';

        let productsData = this.state.products
            .map(product => {

                let path = '/brands/' + product.brand;
                return (
                    <Dropdown.Item key={product.id} >
                        <NavLink data-value={product.id} to={path} >
                            {product.brand}
                        </NavLink>
                    </Dropdown.Item>
                );
            });

        let view;
        if (productsData.length <= 0) {
        view = <Header as='h1' />;
        } else {
        view = (
        
            <Dropdown.Menu>
                {productsData}
            </Dropdown.Menu>
        );
        }

        return (
            <div className='header-wrapper'>
                <Header>
                    <Menu secondary>
                        <Menu.Menu position='left'>
                            <Menu.Item>
                            <Button disabled={vertical} onClick={this.handleAnimationChange('uncover')}>
                                <Icon disabled name='bars' />
                            </Button>
                            </Menu.Item>
                            <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                {this.userLinks()}
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
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
                                {this.userLinks()}
                            </Header>
                            </Menu.Item>
                        </Sidebar>

                        <Sidebar.Pusher dimmed={dimmed && visible}>
                            <Container fluid>
                                <Segment className='header-segment' basic>
                                    <Switch>
                                        <Route path='/' component={Home} exact/>
                                        <Route path = "/user/register" component = {Register} exact />
                                        <Route path = "/user/login" component = {Login} exact />
                                        <Route path = "/contact" component = {Contact} exact />
                                        <Route path = "/about" component = {About} exact />
                                        <Route path = "/blog" component = {Blog} exact />
                                        <Route path = "/brands/:brand?" component = {Brands} exact />
                                    </Switch>
                                </Segment>
                            </Container>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Header>
            </div>  
        );
    }
};

export default HeaderBar;