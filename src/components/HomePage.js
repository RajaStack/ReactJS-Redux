import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import { Link, history } from 'react-router-dom';
import * as actions from '../actions/testActions';
import {Auth} from '../utils/auth';
import Login from './Login';


export class  HomePage   extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      "username" : "",
      "password" : ""
    }
    // This binding is necessary to make `this` work in the callback
    this.Login = this.Login.bind(this);
    this.getUsername = this.getUsername.bind(this);
    this.getPassword = this.getPassword.bind(this);


  }


componentDidMount(){
  this.props.actions.homePageVisit(this.props.homePage, this.props.homePage);
  
}


componentUnMount(){
   console.log(this.props.homePage);
}


Login(){
  if(this.state.username==="admin" && this.state.password==="admin" )
  {
    this.setState({"username" :  "", "password" :  ""});
    Auth.authenticate();
    this.props.history.push("/profile");
  }
  else
  {
    alert("Please Enter Correct Username and Password")
  }
    
}

getUsername(e){
  e.preventDefault();
  this.setState({"username" :  e.target.value});
}


getPassword(e){
  e.preventDefault();
  this.setState({"password" :  e.target.value});
}


  render() {
  let username = this.state.username;
  let passsword = this.state.passsword;

  return (
    <div>
      <h1>Online Shopping</h1>
      <h2>Buy products</h2>
      <div className="col-md-12">
        <div className="col-md-9 pull-left">
          <Link to="/products" ><img  className="banner"  src="assets/images/banner.jpeg" /></Link>
        </div>
        {Auth.isAuthenticated()==false && <Login username={username} passsword={passsword} getUsername={this.getUsername} getPassword={this.getPassword} login={this.Login}/>}
      </div>
    </div>
  );
}
};



function mapStateToProps(state) {
  return {
    homePage: state.productDetails.homePage
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}



export default connect(
  mapStateToProps,mapDispatchToProps
)(HomePage);
