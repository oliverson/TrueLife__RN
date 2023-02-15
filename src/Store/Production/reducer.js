import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import * as Actions from "./constants";

const initState = {
  productSixProductPromotionData: null,
  productListProductContentData: null,
  productSixNewProductData: null,
  productSixSellingProductData: null,
  listProductFilter: [],
  cartData: [],
  isLoadingListProductFilter: false,
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
    case Actions.SET_LOADING_LIST_PRODUCTS_FILLTER: {
      return {
        ...state,
        isLoadingListProductFilter: action?.payload,
      };
    }
    case Actions.ADD_TO_CART: {
      // return {
      //   ...state,
      //   cartData: [
        
      //   ],
      // };
      const index = state?.cartData
        ?.map((e) => e.productId)
        ?.indexOf(action.payload?.productId);
      if (!index && index !== -1) {
        return {
          ...state,
          cartData: [
            ...state?.cartData.filter(e=>e.productId !== action.payload?.productId),
            {
              ...action.payload,
              quantities: state?.cartData?.[index]?.quantities + 1,
            },
          ],
        };
      } else
        return {
          ...state,
          cartData: [
            ...state?.cartData ,
            {
              ...action.payload,
              quantities: 1,
            },
          ],
        };
    }
    case Actions.DELETE_ITEM_ON_CART: {
        return {
          ...state,
          cartData: [
            ...state?.cartData.filter(e=>e.productId !== action.payload?.productId),
          ],
        };
      
    }
    case Actions.CHANGE_QUANTITIES: {
        return {
          ...state,
          cartData: [
            ...state?.cartData.filter(e=>e.productId !== action.payload?.productId),
            {
              ...action.payload,
            },
          ],
        };
    }
    case Actions.SET_CHECKED_ITEM: {
        return {
          ...state,
          cartData: [
            ...state?.cartData.filter(e=>e.productId !== action.payload?.productId),
            {
              ...action.payload,
            },
          ],
        };
    }

    default:
      return state;
  }
};
const persistConfig = {
  key: "product",
  storage: AsyncStorage,
  // blacklist: ['isLoading'],
};

export default persistReducer(persistConfig, ProductionsData);
