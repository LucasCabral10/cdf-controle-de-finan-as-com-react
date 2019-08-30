import React from 'react';
import './App.css';
import Routes from './routes';
import { library, fab } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle,  } from '@fortawesome/free-brands-svg-icons'


library.add(faFacebook,  faGoogle, );

function App() {
    return (
        <Routes />
    );
  };  

  

export default App;
