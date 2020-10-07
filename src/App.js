import React from 'react';
/*import logo from './logo.svg';*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import ciis from './ciis.jpg';
// import status from './status.png';
import './App.css';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import ImageResize from "image-resize";
// import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";


const App = () => {
  return (
    
    // <div>
    //   <img src={ciis} />
    //   <Sidebar bgColor='black' isCollapsed={false}>
        
    //     <LogoText>Hi Admin</LogoText>
        
    //     <font style= {{color : 'gray'}}>Admin/Finance </font>
    //     <ListItem >
    //     <ListItemText>Menu</ListItemText>
    //     </ListItem>
 
    //     <Item bgColor='black'>
    //       <Icon><i className="status"/></Icon>
          
    //       Check Status
    //     </Item>
    //     <Item bgColor='black'>
    //       <Icon><i className="fas fa-info"/></Icon>
    //       Check Payment
    //     </Item>
    //     <Item bgColor='black'>
    //       <Icon><i className="fas fa-sitemap"/></Icon>
    //       All research
    //     </Item>
        
    //     <DropdownItem
    //       values={['Total','Paypal','TMB']}
    //       bgColor = {'black'}>
    //         Paid research
    //       </DropdownItem>
        
    //     <ListItem >
    //     <ListItemText>Setting</ListItemText>
    //     </ListItem>
    //     <Item bgColor='black'>
    //       <Icon><i className="fas fa-home"/></Icon>
    //       Edit
    //     </Item>
    //     <Item bgColor='black'>
    //       <Icon><i className="fas fa-info"/></Icon>
    //       Sign out
    //     </Item>
        
        
    //   </Sidebar>
    // </div>

    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <img src="/images/head.png" width="500px" /> 
        {/* <img src="/images/head.png" width="400px" class="d-inline-block align-top" alt="" loading="lazy"></img> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <img src="/images/register.png" width="30px" />
                <Link className="nav-link" to={"/sign-up"}>REGISTER</Link>
              </li> 
              <li className="nav-item">
                <img src="/images/login.png" width="30px" />
                <Link className="nav-link" to={"/sign-in"}>LOGIN</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
          <Switch>
            <Route exact path='/' component={Home} />
            
            <div className="auth-wrapper">
              <div className="auth-innerlogin">
              <Route path="/sign-in" component={Login} />
              </div>
            </div>
            <Route path="/sign-up" component={SignUp} />
          </Switch>
    </div></Router>
  )
};

export default App;
