import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../actions/testActions';
import * as API from '../utils/api';



export class  Header   extends React.Component {


 constructor(props){
    super(props);
    this.state = {
      "cart" : props.cart
    }
    // this.state = { "cart" : 0 }

  }



componentDidMount(){
    API.get("cart/products").then(res =>{
        console.log(res);
        this.setState({"cart" : res.response.length})
        this.props.actions.addCart(res.response.length);
    }).then(err => {
        console.log(err);
    });
}

componentDidUpdate(){
    // console.log(this.props.cart, this.state.cart);
    // if(this.props.cart!=this.state.cart){
    //   this.props.actions.addCart(this.props.cart);
    //   this.setState({"cart" : this.props.cart})
    // }
}


	render() {
    let cart = this.props.cart;
			return (
           <div className="cart">
               <Link to="/cart" >Cart : {cart}</Link>
            </div>
    			 

    	);
  	}
};

 
Header.propTypes = {
  cart: PropTypes.object.isRequired
};




function mapStateToProps(state) {
  return {
    cart: state.productDetails.cart
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}



export default connect(
  mapStateToProps,mapDispatchToProps
)(Header);


