import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import './home.css';
import NavBar from'./ui/NavBar';
import cellhomeimg from './ui/assets/cell home.svg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
    return (
        <Container>
            <NavBar  />
            <Container className="center">
                <Row>
                    <Col>
                        <h1 className="display-5">Suas finanças na 
                            <p>palma da sua mão!</p></h1>
                        <p className="lead">A plataforma que te ajuda conquistar o seu sucesso<p>financeiro.</p></p>
                        <Button className="btn-verde" color="secondary" tag={Link} to="/Planos">Camece agora</Button>{' '}
                         <Button classNmae="btn-link" color="link">Saiba mais</Button> 
                        < FontAwesomeIcon  icon = {['fas', 'caret-down']} size = "2x" color = "#3b5998"/>                         
                    </Col>
                    <Col>
                         <img src={cellhomeimg} width="500" height="600" className="cell-home rounded float-right" alt="https://www.freepik.com/free-photos-vectors/infographic Infographic vector created by freepik  www.freepik.com "/>
                    </Col>
                </Row>
            </Container>
        </Container>
      
    );
  };
  
  export default Home;