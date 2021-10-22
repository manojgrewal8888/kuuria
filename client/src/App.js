import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/Landing";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/css/style.css";
import Menu from './Menu';
import Tiket from './components/front/Tiket';
import Nomination from './components/front/Nomination';
import Signup from './components/front/Signup';
import Login from './components/front/Login';
import License from './components/front/License';
import Newevent from './components/front/Newevent';
import Umb from './components/front/Umbawards';
import Eventhome from './components/front/Event-home';
import Eventcategory from './components/front/Eventcategory';
import Eventcatdelete from './components/front/Eventcatdelete';
import Welcreate from './components/front/Welcreate';
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
        <Router>
      <Menu/>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />

          
              <Route exact path='/nomination'  component={Nomination}   />
              <Route exact path='/Ticket'  component={Tiket}   />
              <Route exact path='/Signup'  component={Signup}   />
              <Route exact path='/Login'  component={Login}   />
              <Route exact path='/License'  component={License}   />
              <Route exact path='/Newevent' component={Newevent}  />
              <Route exact path='/Umb' component={Umb}  />
              <Route exact path='/Welcreate' component={Welcreate}    />
              <Route exact path='/eventhome' component={Eventhome}    />
              <Route exact path='/Eventcategory' component={Eventcategory}     />
              <Route exact path='/Eventcatdelete' component-={Eventcatdelete}  />
            </Switch>
          </div>
        </Router>
      </Provider>
      </>
    );
  }
}
export default App;