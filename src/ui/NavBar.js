import React from 'react';
import './NavBar.css';
import logo from './assets/logo.svg';


const NavBar = () => {
    return (    
            <nav className="navbar navbar-expand-lg navbar-light bg-ligth scrolling-navbar fixed-top">
                <div className='container'>   
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="150" height="40"  className="d-inline-block align-top" alt="economizze.me"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="NavbarN" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Planos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ajuda</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <button type="button" class="btn btn-outline-success my-2 my-sm-0 btn-sm "href="#">Comece agora</button> 
                        </form>
                    </div>
                </div>
            </nav> 
    );
};

export default NavBar;