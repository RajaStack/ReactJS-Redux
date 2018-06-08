import {HOME_PAGE_VISIT, ABOUT_PAGE_VISIT,ADD_CART_PRODUCT, REMOVE_CART_PRODUCT ,ADD_CART,SELECT_PRODUCT,ADD_PRODUCT} from '../constants/actionTypes';
import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/fuelSavings';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function testReducer(state = initialState.productDetails, action) {
  let newState;

  switch (action.type) {

    case HOME_PAGE_VISIT:
      
      newState = objectAssign({}, state);
      newState.homePage = action.homePage+1;
      return newState;

    case ABOUT_PAGE_VISIT:
      newState = objectAssign({}, state);
      newState.aboutPage = action.aboutPage+1;
      return newState;


    case ADD_PRODUCT:
      newState = objectAssign({}, state);
      newState.products = newState.products.concat([{"name" : action.product}]);
      return newState;

    case SELECT_PRODUCT:
      newState = objectAssign({}, state);
      newState.product = action.product;
      return newState;

    case ADD_CART:
      newState = objectAssign({}, state);
      newState.cart = action.count;
      console.log(newState.cart, action.count);
      return newState;

    case ADD_CART_PRODUCT:
      newState = objectAssign({}, state);
      let new_product = true;
      let cart_products = newState.cart_products
      
      cart_products = cart_products.map((single, i)=>{
        if(single.id==action.product.id)
        {
          single.quantity = single.quantity+1;
          new_product = false;
        }
        return single;
      });

      if(new_product)
      {
        action.product.quantity = 1;
        cart_products = [...cart_products, action.product];
      }

      newState.cart_products = [...cart_products]
      newState.cart = newState.cart_products.length;
      return  newState;

    case REMOVE_CART_PRODUCT:
      newState = objectAssign({}, state);
      newState.cart_products = newState.cart_products.filter((single)=>{ return single.id!=action.product.id })
      newState.cart = newState.cart_products.length;
      return newState;


    
      

    default:
      return state;
  }
}
