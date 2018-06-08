import {connect} from 'react-redux';
import React from 'react';
import {bindActionCreators} from 'redux';
import { Link, history } from 'react-router-dom';
import '../styles/about-page.css';
import * as actions from '../actions/testActions';
import {Auth} from '../utils/auth';


// Since this component is simple and static, there's no parent container for it.
export class  AboutPage   extends React.Component {


  constructor(props) {
    super(props);
    
    // This binding is necessary to make `this` work in the callback
    this.Logout = this.Logout.bind(this);


  }
  componentDidMount(){
      this.props.actions.aboutPageVisit(this.props.aboutPage, this.props.aboutPage);
       //console.log(this.props.aboutPage);
  }


componentUnMount(){
   console.log(this.props.aboutPage);
}

Logout(){
  Auth.signout()
  this.props.history.push("/")
}
    render() {
 

  return (
    <div>
      <h2 className="alt-header">Your Profile</h2>
       <a onClick={this.Logout}>Logout</a>

    </div>
  );
}
};


function mapStateToProps(state) {
  return {
    aboutPage: state.productDetails.aboutPage
  };
}



function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(
  mapStateToProps,mapDispatchToProps
)(AboutPage);
