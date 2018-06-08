/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch, Link, Redirect } from "react-router-dom";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./Header";

import cartPage from './cartPage';
import ProductPage from './ProductPage';
import productListPage from "./productListPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import {Auth} from '../utils/auth';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/' }} />
  )} />
)



class App extends React.Component {
  constructor(props){
    super();

    // this.state = { "cart" : 0 }

  }
  render() {
    const activeStyle = { color: 'blue' };
    return (

      <div>
       <nav className="navbar navbar-inverse">
         <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" exact to="/" activeStyle={activeStyle}>E-Commerce</Link>
            </div>
            <ul className="nav navbar-nav">

               <li className="active">
                   <Link exact to="/" activeStyle={activeStyle}>Home</Link>
              </li>
               <li className="dropdown">
                   <Link to="/profile" activeStyle={activeStyle}>Private</Link>
               </li>
               <li> <Link to="/products" >Products</Link></li>
            </ul>

             <Header />
           
         </div>
      </nav>



      
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/profile" component={AboutPage} />
          <Route path="/products" component={productListPage} />
          <Route path="/cart" component={cartPage} />
          <Route path="/product" component={ProductPage} />
          <Route component={NotFoundPage} />
        </Switch>



      </div>


    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
