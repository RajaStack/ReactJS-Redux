import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Link , history} from 'react-router-dom';
import * as actions from '../actions/testActions';
import * as API from '../utils/api';
import objectAssign from 'object-assign';

export class  ProductPage   extends React.Component {

	constructor(props) {
	    super(props);
	    this.selectProduct = this.selectProduct.bind(this);
	}

	componentWillMount(){
		// if(!this.props.product.name)
		// 	this.props.history.push("/products")
	}
	
	selectProduct(product){
		let _product = objectAssign({}, product)
		_product.quantity = 1;
	    API.post("cart", _product).then(res =>{
	        if(res.status)
	        {
	            this.props.actions.addCart(res.extra);
	        }
	        console.log(res);
	    }).then(err => {
	        console.log(err);
	    });
	  //this.props.actions.addCartProduct(this.props.products, product);
	}

	render() {
		let product = this.props.product;
		return (
			<div className="col-md-12 full-card">
				 <div   className="row col-md-12 cartbox">
	                <div className="col-md-2 pull-left">
	                    <h3 >{product.title}</h3>
	                </div>
	                <div className="col-md-3 pull-left">
	                    <img src={product.image} width="200px" />
	                </div>
	                <div className="col-md-1 pull-left">
	                  Price : Rs <b>{product.price}</b>
	                </div>

	                <div className="col-md-1 pull-left">
	                 	<button onClick={()=>this.selectProduct(product)}  type="button" className="btn btn-success">Add</button>
	                </div>
	            </div>
	   		</div>
    	);
  	}
};

 
ProductPage.propTypes = {
  product: PropTypes.object.isRequired
};




function mapStateToProps(state) {
  return {
    product: state.productDetails.product
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}



export default connect(
  mapStateToProps,mapDispatchToProps
)(ProductPage);


