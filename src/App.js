
import './App.css';
import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import Delate from './components/Delate/Delate';
import Sidebar from './components/Sidebar/Sidebar';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
        <Router>
          <Header />
          <div>
            
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <PrivateRoute path="/order">
                <Order/>
              </PrivateRoute>
              <PrivateRoute path="/admin">
                <Admin />
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/checkout/:_id">
                  <Checkout />
              </PrivateRoute>
              <PrivateRoute path='/delate'>
                 <Delate/>
              </PrivateRoute>
              <PrivateRoute path='/sidebar'>
                <Sidebar/>
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider> 
  );
}

export default App;
