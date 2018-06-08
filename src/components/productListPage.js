import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import { Link, history } from 'react-router-dom';
import * as actions from '../actions/testActions';
import * as API from '../utils/api';

import Product from './Product';


export class  productListPage   extends React.Component {

constructor(props) {
    super(props);
    this.state = {value: '', product : {}, products : this.props.products};

    // This binding is necessary to make `this` work in the callback
    this.addProduct = this.addProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.detailProduct = this.detailProduct.bind(this);

  }


componentDidMount(){
    API.get("products").then(res =>{
        console.log(res);
        this.setState({"products" : res.response})
    }).then(err => {
        console.log(err);
    });
}

handleChange(event) {
    this.setState({value: event.target.value});
}

addProduct(){
  let product = this.state.value;
  this.props.actions.addProducts(this.props.products, product);
  document.getElementById("product").value = "";
}

selectProduct(product){
    product.quantity = 1;
    API.post("cart", product).then(res =>{
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


detailProduct(product){
  console.log(product);
  this.props.actions.selectProduct(product);
  this.props.history.push("/product")
  //this.setState({product: product});
}




componentUnMount(){
   console.log(this.props.products);

}

  render() {
    var self = this;
    return (
        <div className="container">
          <h3>Electronic Items</h3>
            <div className="row">
              <div className="col-md-12">


              {this.state.products.map((product, i) =>
                <Product  key={i} product={product} detailProduct={self.detailProduct} showTick={product.showTick} selectProduct={self.selectProduct} />
              )}
              
              
            
            </div>
         </div>
      </div>
    );
  }
};



function mapStateToProps(state) {
  return {
    products: state.productDetails.products
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}



export default connect(
  mapStateToProps,mapDispatchToProps
)(productListPage);
