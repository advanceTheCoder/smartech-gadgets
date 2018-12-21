import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Input, Dropdown,Header,Icon,Button} from 'semantic-ui-react';
import Drawer from '../Drawer/Drawer';
import './HeaderBar.css';

class HeaderBar extends Component {

    state = {

        username: localStorage.getItem('username'),
        animation: 'uncover',
        direction: 'left',
        dimmed: false,
        visible: false
    };

    handleAnimationChange = animation => () =>
    this.setState({ animation, visible: !this.state.visible })

    userLinks = () => {

        let loggedIn = localStorage.getItem('auth');
        let userLinkTitle = this.state.username ? this.state.username : 'User';
        
        if (loggedIn) {
            return (
                <Dropdown text={userLinkTitle} simple>
                    <Dropdown.Menu className='dropdown-content'>
                        <Dropdown.Item><Link to='/user/profile'>Profie</Link></Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item><Link to='/user/logout'>Logout</Link></Dropdown.Item>
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
                    <Drawer 
                        user={this.userLinks()}
                        animation={animation}
                        dimmed={dimmed}
                        visible={visible}
                    />
                </Header>
            </div>  
        );
    }
};

export default HeaderBar;