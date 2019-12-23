

import React, { Component } from 'react';
import '../styles/App.css';
import ToDoForm from './todo.js';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LoginForm from './Login.js';
import LoginForm2 from './LogInForm/Logtemp';
import PrivateRoute from './PrivateRoute';
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
                 <PrivateRoute exact path='/todo' component={ToDoForm} />
                 <Route exact path='/login2' component={LoginForm2} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
