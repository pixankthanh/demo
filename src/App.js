

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './component/ToDoForm/todo.js';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LoginForm from './component/LogInForm/Login.js';
import LoginForm2 from './component/LogInForm/Logtemp';

class App extends Component {
    
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
       
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/login"/>
                )}/>
                 <Route exact path='/login' component={LoginForm} />
                 <Route exact path='/todo' component={ToDoForm} />
                 <Route exact path='/login2' component={LoginForm2} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
