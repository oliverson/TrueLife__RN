import apiMethod from "../../Utils/apiMethod";
import API, { APP_NAME } from "../../config/api";

export const login = (payload) => {
  return apiMethod.post(API.POST_AUTH_SIGN_IN, payload);
};

export const signup = (payload) => {
  return apiMethod.post(API.POST_AUTH_SIGN_UP, payload);
};
