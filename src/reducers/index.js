import { combineReducers } from 'redux';
import productDetails from './testReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  productDetails,
  routing: routerReducer
});

export default rootReducer;
