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
