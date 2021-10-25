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
import Index from "./components/front/Index";


import Signup from './components/front/Signup';
import Login from './components/front/Login';
import License from './components/front/License';


import Eventhome from './components/front/Event-home';




import Tiket from './components/front/Tiket';
import Awardevent from "./components/front/Awardevent";

import Dashnom from "./components/front/Dashnominee";
import Dashvoting from "./components/front/Dashvoting";
import Votebrowse from "./components/front/Votebrowse";
import Votenominee from "./components/front/Votenominee";
import Votepersonal from "./components/front/Votepersonal";
import Voteprices from "./components/front/Voteprices";
import Votesubmit from "./components/front/Votesubmit";

import Welcome from "./components/front/Welcome";
import Create from "./components/front/Welcreate";
import Eventdesh from "./components/front/Eventdesh";
import Opened from "./components/front/Eventopened";
import Eventsetting from "./components/front/Eventsetting";
import Settinggen from "./components/front/Settinggen";
import Settingorg from "./components/front/Settingorg";
import Settingapp from "./components/front/Settingapp";
import Eventcategory from "./components/front/Eventcategory";
import Eventnominee from "./components/front/Eventnominee";
import Eventnominfo from "./components/front/Eventnominfo";
import Eventdelete from "./components/front/Eventdelete";
import Eventcatcreate from "./components/front/Eventcatcreate";



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
            
            <div className="App">


                <Switch>
                  <Route exact path='/menu' component={Menu} />
                  <Route exact path='/' component={Index} />

                  <Route exact path='/ticket' component={Tiket} />
                  <Route exact path='/ticketevent' component={Awardevent} />

                  <Route exact path='/signup' component={Signup} />
                  <Route exact path='/login' component={Login} />


                  <Route exact path='/dashnominee' component={Dashnom} />
                  <Route exact path='/dashvote' component={Dashvoting} />
                  <Route exact path='/votecheck' component={Votecheck} />
                  <Route exact path='/votebrowse' component={Votebrowse} />
                  <Route exact path='/votenominee' component={Votenominee} />
                  <Route exact path='/votepersonal' component={Votepersonal} />
                  <Route exact path='/voteprices' component={Voteprices} />
                  <Route exact path='/votesubmit' component={Votesubmit} />


                  <Route exact path='/welcome' component={Welcome} />
                  <Route exact path='/create' component={Create} />
                  <Route exact path='/eventdash' component={Eventdash} />
                  <Route exact path='/eventopened' component={Opened} />
                  <Route exact path='/eventsetting' component={Eventsetting} />
                  <Route exact path='/settinggen' component={Settinggen} />
                  <Route exact path='/settingorg' component={Settingorg} />
                  <Route exact path='/settingapp' component={Settingapp} />
                  <Route exact path='/category' component={Eventcategory} />
                  <Route exact path='/eventnominee' component={Eventnominee} />
                  <Route exact path='/nomineeinfo' component={Eventnominfo} />
                  <Route exact path='/eventdelete' component={Eventdelete} />
                  <Route exact path='/createcat' component={Eventcreatecat} />






                  <Route exact path='/license' component={License} />
                  <Route exact path='/eventhome' component={Eventhome} />

                </Switch>
                </div>
                </Router>
          </Provider>
        </>
            );
  }
}
            export default App;