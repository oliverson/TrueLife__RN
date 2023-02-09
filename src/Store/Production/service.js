import apiMethod from '../../Utils/apiMethod';
import API, { APP_NAME } from '../../config/api';
import { RETCODE_SUCCESS, SUCCESS } from '../../config/constants';


export const getTopSixNewProducts = () => {
  return apiMethod.get(API.GET_TOP_SIX_NEW_PRODUCT);
};

export const getTopSixSellingProducts = () => {
  return apiMethod.get(API.GET_TOP_SIX_SELLING_PRODUCT);
};
export const getTopSixProductsPromotion = () => {
  return apiMethod.get(API.GET_TOP_SIX_PRODUCT_PROMOTION);
};

export const getListProductsContent = () => {
  return apiMethod.get(API.GET_LIST_PRODUCT_CONTENT)
}