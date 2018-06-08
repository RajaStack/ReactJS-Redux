import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../actions/testActions';


const Login = ({username, password, login, getPassword, getUsername}) => (

   	<div className="col-md-3 pull-right login_box">
         <input className="form-control login_field" value={username} type="text" placeholder="Username"  name="username" id="username" onChange={getUsername} />
         <input className="form-control login_field" value={password} type="password" placeholder="Password" name="password"  id="password" onChange={getPassword} />
         
         <a className="btn btn-success" onClick={login}>Login</a>
      </div>

);

 
Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;