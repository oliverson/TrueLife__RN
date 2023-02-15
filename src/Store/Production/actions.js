import * as Actions from "./constants";

export function getTopSixNewProductsActions(payload) {
  return {
    type: Actions.GET_TOP_SIX_NEW_PRODUCTS,
    payload,
  };
}
export function getTopSixSellingProductsActions(payload) {
  return {
    type: Actions.GET_TOP_SIX_SELLING_PRODUCTS,
    payload,
  };
}
export function getTopSixProductsPromotionActions(payload) {
  return {
    type: Actions.GET_TOP_SIX_PRODUCTS_PROMOTION,
    payload,
  };
}
export function getListProductsContentActions(payload) {
  return {
    type: Actions.GET_LIST_PRODUCTS_CONTENT,
    payload,
  };
}

export function getListProductsFlitter(payload) {
  return {
    type: Actions.GET_LIST_PRODUCTS_FILLTER,
    payload,
  };
}

export function getDeatilsProduct(payload) {
  return {
    type: Actions.GET_PRODUCTS_DEATILS,
    payload,
  };
}

export function addToCart(payload) {
  return {
    type: Actions.ADD_TO_CART,
    payload,
  };
}

export function deleteItemOnCart(payload) {
  return {
    type: Actions.DELETE_ITEM_ON_CART,
    payload,
  };
}

export function changeQuantitiesItemOnCart(payload) {
  return {
    type: Actions.CHANGE_QUANTITIES,
    payload,
  };
}

export function setCheckedItemOnCart(payload) {
  return {
    type: Actions.SET_CHECKED_ITEM,
    payload,
  };
}
