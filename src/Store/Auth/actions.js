import * as Actions from "./constants";

export function loginActions(payload) {
  return {
    type: Actions.LOGIN_USER,
    payload,
  };
}

export function getProfileUser(payload) {
  return {
    type: Actions.LOGIN_USER_SUCCESS,
    payload,
  };
}

export function signUpActions(payload) {
  return {
    type: Actions.SIGN_UP_USER,
    payload,
  };
}
