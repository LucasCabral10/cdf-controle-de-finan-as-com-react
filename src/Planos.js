import React, { Component } from 'react';
import { Container, Row, Col,Button, Form , Badge} from 'reactstrap';
import './Planos.css';
import NavBar from'./ui/NavBar';
import recomendado from './ui/assets/recomendado.svg';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

function Planos() {
    
  const [state, setState] = React.useState({
    gilad: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

    return (
        <Container >
            <NavBar />
            <Container className="center-planos">             

             <FormControl component="fieldset">
                <FormLabel component="legend">Plano</FormLabel>
                <FormGroup>
                    <FormControlLabel
                    control={<Switch checked={state.gilad} onChange={handleChange('gilad')} value="gilad" color="primary" />}
                    label="Anual"
                    />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                <div>
                <Row>        
                    <Col xs="6" sm="4">                
                        <Form className="form-left">
                            <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <h2 className="h2-planos" >FREE</h2>
                            </Col>
                            <Row  className="row-valor">
                            <Col xs="6" sm="4"><h5 className="free-cifrão">$</h5></Col>
                            <Col xs="6" sm="4"><p className="free-valor">0</p></Col>
                            <Col sm="4"><h6><Badge color="secondary"className="anual">Anual</Badge></h6></Col>
                            </Row>                           
                             <Button className="btn-verde-borda-free" outline color="verde" size="lg">Comece agora</Button>{' '}
                            </Row>
                        </Form>
                    </Col>
                        
                    <Col xs="6" sm="4">
                        <Form className="form-center">
                            <img src={recomendado} width="200" height="100" className="recomendado"/>    
                            <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <h2 className="h2-planos-center">BÁSICO</h2>
                            </Col>
                            <Row  className="row-valor-Basico">
                            <Col xs="6" sm="4"><h5 className="free-cifrão">$</h5></Col>
                            <Col xs="6" sm="4"><p className="free-valor">0</p></Col>
                            <Col sm="4"><h6><Badge color="secondary"className="anual">Anual</Badge></h6></Col>
                            </Row>
                            </Row>
                        </Form>
                    </Col>
                   
                    <Col sm="4">
                        <Form className="form-right">
                            <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <h2 className="h2-planos">PRO</h2>
                            </Col>
                            <Row  className="row-valor-Pro">
                            <Col xs="6" sm="4"><h5 className="free-cifrão">$</h5></Col>
                            <Col xs="6" sm="4"><p className="free-valor">0</p></Col>
                            <Col sm="4"><h6><Badge color="secondary"className="anual">Anual</Badge></h6></Col>
                            </Row>
                            </Row>
                        </Form>
                    </Col>
                </Row>  
                </div>              
            </Container>           
        </Container>
        );
};

export default Planos;