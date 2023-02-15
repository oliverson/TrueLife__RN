import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import * as Actions from "./constants";

const initState = {
  profileData: null,
  signUpSuccess: null,
  listCartUser: null,
  deliveryInfor: null,
};

const UserData = (state = initState, action = {}) => {
  switch (action.type) {
    case Actions.SET_USER_DATA: {
      return {
        ...state,
        profileData: action.payload,
      };
    }
    case Actions.SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUpSuccess: [...action.payload],
      };
    }
    case Actions.SET_INFOR_USER_CART: {
      return {
        ...state,
        listCartUser: [...action.payload],
      };
    }
    case Actions.SET_INFOR_DELIVERY_ADDRESS: {
      return {
        ...state,
        deliveryInfor: [...action.payload],
      };
    }
    default:
      return state;
  }
};
const persistConfig = {
  key: "auth",
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

export default persistReducer(persistConfig, UserData);
