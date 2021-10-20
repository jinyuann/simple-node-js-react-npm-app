import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navigationbar";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard"; 
import Profile from "../Profile/Profile";
import TwoFA from "../2FA/2FAAuthentication";
import Register from "../Register/Register"
import {React, useState} from 'react';
import useToken from './useToken';
import useDataToken from './useDataToken';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
const { token, setToken } = useToken();
const { dataToken, setDataToken } = useDataToken();
const [loginstatus, setloginstatus] = useState();
let sessiontext;
if (sessionStorage.getItem('token')!=null){
sessiontext = <p>WELCOME {token}</p>;
}
let sessiondatatext;
if (sessionStorage.getItem('dataToken')!=null){
sessiondatatext = <p>WELCOME {dataToken}</p>;
}

  return (
    <div className="App">
      <Navbar tokenstatus={token} setToken={setToken}/>
      <Router>
        <div>
          <Switch>
            <Route path="/dash">{token != null || token != "" ?
              (<Dashboard Token={token} DataToken={dataToken}/>):
              (<a href="/"></a>)
            }
            </Route>
            <Route path="/login">
              <Login score="111111" hello="asd"/>
            </Route>
             <Route path="/TwoFA">
              <TwoFA setToken={setToken} setDataToken={setDataToken}/>
            </Route>
            <Route path = "/Register">
            <Register/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/">
              <p>Home Page</p>
              {sessiondatatext}
              {sessiontext}
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
