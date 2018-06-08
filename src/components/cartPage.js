import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions/testActions';
import * as API from '../utils/api';


export class  cartPage   extends React.Component {

constructor(props) {
    super(props);
    this.state  = {
      "subtotal" : 0,
      "products" : this.props.products
    }
   // this.selectProduct = this.selectProduct.bind(this);


  }

componentWillMount(){
  this.calculateSubTotal()
}


componentDidMount(){
    this.getProducts();
}

getProducts(){
  API.get("cart/products").then(res =>{
        console.log(res);
        this.setState({"products" : res.response})
    }).then(err => {
        console.log(err);
    });
}


calculateSubTotal(){
  let price = 0;
  this.state.products.forEach((product)=>{
      price = price + (product.quantity * product.price);
  });
   if(price!=this.state.subtotal)
    this.setState({ "subtotal" : price })
}

componentDidUpdate(){
  this.calculateSubTotal()
}


removeCart(product){
    let query = "?id="+product._id;
    API.get("cart/remove"+query).then(res =>{
        if(res.status)
        {
            this.props.actions.addCart(res.extra);
        }
        this.getProducts();
    }).then(err => {
        console.log(err);
    });
  //this.props.actions.removeCartProduct(this.props.products, product);
}



  render() {
    var self = this;
    return (
      <div>
        <h5>Cart List</h5>
        <div className="col-md-12 ">

           {this.state.products.length > 0 ? (this.state.products.map((product, i) =>

            <div  key={i}  className="row col-md-12 cartbox">
                <div className="col-md-2 pull-left">
                    <h5 >{product.title}</h5>
                </div>
                <div className="col-md-2 pull-left">
                    <img onClick={()=>selectProduct(product)}  src={product.image} width="60px" />
               
                </div>
                <div className="col-md-1 pull-left">
                   Rs <b>{product.price}</b> <span>Quantity :{product.quantity} </span>
                </div>
                <div className="col-md-1 pull-right">
                    Total : Rs <b>{product.price * product.quantity}</b>
                       <span className="remove_cart" onClick={()=>this.removeCart(product)}> X </span>
                </div>
            </div>
            
                
          )) : (<h5>Cart is Empty</h5>)}

            {this.state.subtotal!=0 && <div className="row col-md-12">
                 <div className="col-md-1 pull-right">
                    Sub Total = Rs : {this.state.subtotal}
                 </div>
            </div>}
       </div>
       
           
      </div>
    );
  }
};



function mapStateToProps(state) {
  return {
    products: state.productDetails.cart_products
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}



export default connect(
  mapStateToProps,mapDispatchToProps
)(cartPage);
