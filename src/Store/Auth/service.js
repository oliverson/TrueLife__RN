import apiMethod from "../../Utils/apiMethod";
import API, { APP_NAME } from "../../config/api";

export const login = (payload) => {
  return apiMethod.post(API.POST_AUTH_SIGN_IN, payload);
};

export const getDeatilsUser = (payload) => {
  return apiMethod.post(
    API.DETAIL_INFO_USER,
    {},
    {
      params: payload,
    }
  );
};

export const signup = (payload) => {
  return apiMethod.post(API.POST_AUTH_SIGN_UP, payload);
};

export const getInforUserCart = (payload) => {
  return apiMethod.post(
    API.GET_INFOR_USER_CART,
    {},
    {
      params: payload,
    }
  );
};

export const updateInforUser = (payload) => {
  return apiMethod.post(API.UPDATE_INFO_USER, payload);
};

export const updateAddressDeliveryUser = (payload) => {
  return apiMethod.post(API.UPDATE_ADDRESS_DELIVERY_USER, payload);
};

export const getListInfoAddressDeliveryUser = (payload) => {
  return apiMethod.post(
    API.LIST_INFOR_ADDRESS_DELIVERY,
    {},
    {
      params: payload,
    }
  );
};
