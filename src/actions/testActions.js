import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dates';


export function homePageVisit(settings, homePage) {
  console.log("homepage coming action");
  return {
    type: types.HOME_PAGE_VISIT,
    dateModified: getFormattedDateTime(),
    settings, 
    homePage
  };
}





export function aboutPageVisit(settings, aboutPage) {
  return {
    type: types.ABOUT_PAGE_VISIT,
    dateModified: getFormattedDateTime(),
    settings, 
    aboutPage
  };
}







export function addProducts(settings, product) {
  return {
    type: types.ADD_PRODUCT,
    dateModified: getFormattedDateTime(),
    settings, 
    product
  };
}

export function addCartProduct(settings, product) {
  return {
    type: types.ADD_CART_PRODUCT,
    dateModified: getFormattedDateTime(),
    settings, 
    product
  };
}



export function updateCartCount(count){
  return {
    type: types.CART_COUNT,
    dateModified: getFormattedDateTime(),
    settings, 
    product
  };
}

export function removeCartProduct(settings, product) {
  return {
    type: types.REMOVE_CART_PRODUCT,
    dateModified: getFormattedDateTime(),
    settings, 
    product
  };
}




export function selectProduct(product) {
  console.log(product);
  return {
    type: types.SELECT_PRODUCT,
    dateModified: getFormattedDateTime(),
    product
  };
}


export function addCart(count) {
  return {
    type: types.ADD_CART,
    dateModified: getFormattedDateTime(),
    count
  };
}





