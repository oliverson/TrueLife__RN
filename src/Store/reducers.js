import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authReducer from "./Auth/reducer";
import alertReducer from "./alert/reducer";
import productReducer from "./Production/reducer";
/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */

const appReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  product: productReducer,
});

const rootReducers = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    console.log("USER_LOGOUT");
    AsyncStorage.removeItem("persist:root");
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducers;
