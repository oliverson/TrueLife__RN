import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import * as Actions from "./constants";

const initState = {
  profileData: null,
  signUpSuccess: null,
};

const UserData = (state = initState, action = {}) => {
  switch (action.type) {
    case Actions.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        profileData: [...action.payload],
      };
    }
    case Actions.SIGN_UP_SUCCESS: {
      return {
        ...state,
        signUpSuccess: [...action.payload],
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
