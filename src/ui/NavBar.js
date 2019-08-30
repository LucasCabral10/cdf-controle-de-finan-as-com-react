import './NavBar.css';
import logo from './assets/logo.svg';

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Button} from 'reactstrap';

import {Link} from 'react-router-dom';

class NaVbar extends React.Component {
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
       
                <Navbar  fixed={`top`}className="navbar"  expand="md" >
                     <Container >
                    <NavbarBrand href="/"><img src={logo} width="170" height="40"  className="d-inline-block align-top" alt="economizze.me"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/Planos">Planos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Ajuda</NavLink>
                        </NavItem>
                        </Nav>
                        <Button className="btn-verde-borda" outline color="verde" tag={Link} to="/Login">Entrar</Button>{' '}
                    </Collapse>
                     </Container>
                </Navbar>
            
        );
    }
    }
    

  export default NaVbar;