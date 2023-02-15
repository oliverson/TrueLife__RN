import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import * as Actions from "./constants";

const initState = {
  productSixProductPromotionData: null,
  productListProductContentData: null,
  productSixNewProductData: null,
  productSixSellingProductData: null,
  listProductFilter: null,
  productDetails: null,
};
const ProductionsData = (state = initState, action = {}) => {
  switch (action.type) {
    case Actions.GET_TOP_SIX_NEW_PRODUCTS_SUCCESS: {
      return {
        ...state,
        productSixNewProductData: [...action.payload],
      };
    }
    case Actions.GET_TOP_SIX_SELLING_PRODUCTS_SUCCESS: {
      return {
        ...state,
        productSixSellingProductData: [...action.payload],
      };
    }
    case Actions.GET_TOP_SIX_PRODUCTS_PROMOTION_SUCCESS: {
      return {
        ...state,
        productSixProductPromotionData: [...action.payload],
      };
    }
    case Actions.GET_LIST_PRODUCTS_CONTENT_SUCCESS: {
      return {
        ...state,
        productListProductContentData: [...action.payload],
      };
    }
    case Actions.SET_LIST_PRODUCTS_FILLTER: {
      return {
        ...state,
        listProductFilter: [...action.payload],
      };
    }
    case Actions.SET_DETAILS_PRODUCT: {
      return {
        ...state,
        productDetails: [...action.payload],
      };
    }

    default:
      return state;
  }
};
const persistConfig = {
  key: "product",
  storage: AsyncStorage,
  blackList: [
    // 'accessToken',
    // 'userData',
    // 'profileData',
    // 'userSignUp',
    // 'signInSuccess',
    // 'signUpSuccess',
    // 'updateInfoStudentSuccess',
    // 'updateInfoParentSuccess',
    // 'signInError',
    // 'signUpError',
    // 'updateInfoStudentError',
    // 'updateInfoParentError',
    // 'updateAvatarLoading',
    // 'buyCourse',
  ],
  // blacklist: ['isLoading'],
};

export default persistReducer(persistConfig, ProductionsData);
