import * as Actions from "./constants";

export function loginActions(payload) {
  return {
    type: Actions.LOGIN_USER,
    payload,
  };
}

export function setProfileUser(payload) {
  return {
    type: Actions.SET_USER_DATA,
    payload,
  };
}

export function signUpActions(payload) {
  return {
    type: Actions.SIGN_UP_USER,
    payload,
  };
}

export function getInforUserCart(payload) {
  return {
    type: Actions.GET_INFOR_USER_CART,
    payload,
  };
}

export function getInforDeliveryAddress(payload) {
  return {
    type: Actions.GET_INFOR_DELIVERY_ADDRESS,
    payload,
  };
}

export function updateInforUserActions(payload) {
  return {
    type: Actions.UPDATE_USER_INFOR,
    payload,
  };
}
