import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/pagezero';
import NameAddress from './Components/pageone';
import PhoneEmail from "./Components/pagetwo";

class App extends Component {
  render(){
    return(
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/NameAddress" component={NameAddress}/>
              <Route path="/PhoneEmail" component={PhoneEmail}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  };
}

export default App;
