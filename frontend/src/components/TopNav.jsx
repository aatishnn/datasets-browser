import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'
import VisibleWhenAuthenticated from '../pages/Auth/VisibleWhenAuthenticated';

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="info" dark expand="md">
        <NavbarBrand><Link to="/" className="text-white">MD4SG Datasets</Link></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <VisibleWhenAuthenticated reverse={true}>
              <NavItem>
                <Link to="/login/"><NavLink>Moderators Login</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/dataset/suggest/"><NavLink>Suggest dataset</NavLink></Link>
              </NavItem>
            </VisibleWhenAuthenticated>
            <VisibleWhenAuthenticated>
              <NavItem>
                <Link to="/dataset/new/"><NavLink>Add Dataset</NavLink></Link>
              </NavItem>
            </VisibleWhenAuthenticated>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default TopNav
