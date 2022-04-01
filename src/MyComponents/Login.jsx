import React from 'react'
// import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Tabs, Tab } from 'react-bootstrap';
import CSignIn from './CSignIn';
import ShopSignIn from './ShopSignIn';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }
    
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    render() {
        return (
            <div className='box justify-content-center p-5 my-5 mx-auto'>
            <Tabs defaultActiveKey="customer" id="uncontrolled-tab-example">
                <Tab eventKey="customer" title="Customer"><br /><br />
                    <CSignIn />
                </Tab>
                <Tab eventKey="shop" title="Shop">
                    <ShopSignIn />
                </Tab>
            </Tabs>
            </div>
        );
    }
}