import React from 'react';
import Home from  './Home';
import Login from './Login';    
import Planos from './Planos'
import { BrowserRouter, Route, Switch,link} from 'react-router-dom';

//const PrivateRoutes = ({ component : Component, ...rest}) => (
//   <Route {...rest} render={props => (
//    )} /> 
//)
function Routes() {  
    return(
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Planos" component={Planos} />
            <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>  
    );
};

export default Routes;