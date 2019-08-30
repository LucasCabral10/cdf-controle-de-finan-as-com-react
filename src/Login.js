import React, {Component} from "react";
import {Container, NavLink, Row, Col, Button, Form, 
FormGroup, Label, Input} from 'reactstrap';
import './Login.css'
import logo from './ui/assets/logo.svg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Component{
   render() {
   return (
            <Form className="login-form">
                <NavLink tag={Link} to="/">
                <img src={logo} width="170" height="40"  className="d-inline-block align-top" alt="economizze.me"/>
                </NavLink>
                <h2 classNam="display-4" >Ei,bom ver você aqui!</h2>
                <p className="lead">Faça o Login para entrar. </p>
                 <Form collun className="form-login">
                        <FormGroup >
                            <Label for="exampleEmail" className="mr-sm-2" hidden>Email</Label>
                            <Input className="form-input" type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input className="form-input" type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                        {' '}
                    <Row>
                    <Col xs="3" >
                    <Button  className="btn-verde" color="secondary">Entrar</Button>
                    </Col>
                    <Col xs="3" className="col-or">
                    <p className="or"> ou</p>
                    </Col>
                    <Col xs="6" className="col-social">
                    <Label>
                        <Row className="row-social">                   
                            <Col className="col-facebook">        
                                < FontAwesomeIcon  icon = {['fab', 'facebook']} size = "2x" color = "#3b5998"/>
                            </Col>
                            <Col className="col-google">
                                < FontAwesomeIcon  icon  = {['fab', 'google']} size = "2x" color = "#D44638"/>
                            </Col>
                        </Row>
                    </Label>
                    </Col>
                    </Row>
                </Form>
                <Row>
                            <Col>
                         <Button className="btn-link-conta" color="link">Não tenho uma conta</Button>                            
                            </Col>
                            <Col>
                         <Button className="btn-link-senha" color="link">Esqueci a senha</Button> 
                            </Col> 
                        </Row>
            </Form> 
        );
    };
};

export default Login;