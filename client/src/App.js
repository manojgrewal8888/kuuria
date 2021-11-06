import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
//import Landing from "./components/layout/Landing";
//import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/css/style.css";

import Menu from "./Menu";
import Index from './components/front/Index';

import Tiket from './components/front/Tiket';
import Awardevent from './components/front/Awardevent';


import Signup from './components/front/Signup';
import Login from './components/front/Login';
import Emailhead from "./components/front/Emailhead";
import Forget from "./components/front/Forget";
import Varification from "./components/front/Varification";
import Justloged from "./components/front/Justloged";

import Dashnom from './components/front/Dashnominee';
import Dashvoting from './components/front/Dashvoting';
import Votecheck from './components/front/Votecheck';
import Votebrowse from './components/front/Votebrowse';
import Votenominee from './components/front/Votenominee';
import Votepersonal from './components/front/Votepersonal';
import Voteprices from './components/front/Voteprices';
import Votesubmit from './components/front/Votesubmit';


import Welcome from './components/front/Welcome';
import Create from './components/front/Welcreate';
import Eventdash from './components/front/Eventdesh';
import Opened from './components/front/Eventopened';
import Eventsetting from './components/front/Eventsetting';
import Settinggen from './components/front/Settinggen';
import Settingorg from './components/front/Settingorg';
import Settingapp from './components/front/Settingapp';
import Eventcategory from './components/front/Eventcategory';
import Eventnominee from './components/front/Eventnominee';
import Eventnominfo from './components/front/Eventnominfo';
import Eventdelete from './components/front/Eventdelete';


import Vendordash from "./components/front/Vendordash";
import Manageevents from "./components/front/Manageevents";
import Manageticket from "./components/front/Manageticket";
import Vieweditticket from "./components/front/Vieweditticket";
import Revenu from "./components/front/Revenu";

import Chart from "./components/front/Chart";
import Chartdeno from "./components/front/Chartdeno";



import Eventhome from './components/front/Event-home';
import License from './components/front/License';





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
                <Switch>
                  <Route  exact={true} path='/' component={Index} /> 
                  <Route  exact={true} path='/menu' component={Menu} />
                  <Route  exact={true} path='/dashboard' component={Eventdash} />
                  <Route  exact={true} path='/ticket' component={Tiket} />
                  <Route  exact={true} path='/ticketevent' component={Awardevent} /> 
                  <Route  exact={true} path='/signup' component={Signup} />
                  <Route  exact={true} path='/login' component={Login} />
                  <Route  exact={true} path='/mailhead' component={Emailhead} />
                  <Route  exact={true} path='/forgetpassword' component={Forget}  />
                  <Route  exact={true} path='/varification' component={Varification}  />
                  <Route  exact={true} path='/login_confirmation' component={Justloged}  /> 
                  <Route  exact={true} path='/dashnominee' component={Dashnom} />
                  <Route  exact={true} path='/dashvote' component={Dashvoting} />
                  <Route  exact={true} path='/votecheck' component={ Votecheck} />
                  <Route  exact={true} path='/votebrowse' component={Votebrowse} />
                  <Route  exact={true} path='/votenominee' component={Votenominee} />
                  <Route  exact={true} path='/votepersonal' component={Votepersonal} />
                  <Route  exact={true} path='/voteprices' component={Voteprices} />
                  <Route  exact={true} path='/votesubmit' component={Votesubmit} /> 
                  <Route  exact={true} path='/welcome' component={Welcome} />
                  <Route  exact={true} path='/create' component={Create} />
                  <Route  exact={true} path='/eventdash' component={Eventdash} />
                  <Route  exact={true} path='/eventopened' component={Opened} />
                  <Route  exact={true} path='/eventsetting' component={Eventsetting} />
                  <Route  exact={true} path='/settinggen' component={Settinggen} />
                  <Route  exact={true} path='/settingorg' component={Settingorg} />
                  <Route  exact={true} path='/settingapp' component={Settingapp} />
                  <Route  exact={true} path='/category' component={Eventcategory} />
                  <Route  exact={true} path='/eventnominee' component={Eventnominee} />
                  <Route  exact={true} path='/nomineeinfo' component={Eventnominfo} />
                  <Route  exact={true} path='/eventdelete' component={Eventdelete} /> 
                  
                  <Route  exact={true} path='/vender_dash' component={Vendordash} />
                  <Route  exact={true} path='/manage_events' component={Manageevents}  />
                  <Route  exact={true} path='/manage_ticket' component={Manageticket} />
                  <Route  exact={true} path='/viewedit_ticket' component={Vieweditticket} />
                  <Route  exact={true} path='/revenue' component={Revenu}   /> 
                  <Route  exact={true} path='/chart'  component={Chart}  />
                  <Route  exact={true} path='/chartreal' component={Chartdeno}   /> 
                  <Route  exact={true} path='/license' component={License} />
                  <Route  exact={true} path='/eventhome' component={Eventhome} />

                </Switch>
                </Router>
                </Provider>
               
               
         
        </>
            );
  }
}
            export default App;