import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as actions from '../actions/testActions';


const Product = ({product, selectProduct, detailProduct, showTick}) => (

	<div className="col-md-3 card">
      <h5>{product.title}</h5>
      <img onClick={()=>detailProduct(product)} src={product.image} width="110px" />
      <div className="col-md-6">
         <p>Rs {product.price}</p>
      </div>
      <div className="col-md-6">
         <button onClick={()=>selectProduct(product)}  type="button" className="btn btn-success">Add</button>
      </div>
   </div>


);

 
Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;