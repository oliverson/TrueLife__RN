import { put, call, takeEvery } from "redux-saga/effects";

import * as Actions from "./constants";
import * as ActionAlert from "../alert/constants";
// import {  } from '../../Navigations';
import { RETCODE_SUCCESS, SUCCESS } from "../../config/constants";
import {
  getDeatilsUser,
  getInforUserCart,
  getListInfoAddressDeliveryUser,
  login,
  signup,
  updateInforUser,
} from "./service";
// import { navigate } from "../../Navigations/rootNavigation";
// import Auth from "../../config/routes/Auth";

function* getInforUser({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(getDeatilsUser, {
      ...payload,
    });

    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      // console.log(
      //   'RESSsssdddsssss',
      //   JSON.stringify(res.data?.data?.listData, null, 4),
      // );
      // yield put({
      //   type: ActionAlert.SHOW_ALERT,
      //   payload: res?.data?.retText,
      // });
      yield put({
        type: Actions.SET_USER_DATA,
        payload: res.data?.data,
      });

      console.log("luu data user THANH CONG");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("luu data user failed");
    }
  } catch (e) {
    console.log("getInforUser FAILED", e);
  } finally {
  }
}

function* loginMethod({ payload }) {
  console.log("CHAY ZO");
  try {
    // const dispatch = useDispatch();

    const res = yield call(login, {
      ...payload,
    });
    console.log("RES", JSON.stringify(res.data, null, 4));

    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      alert("Đăng nhập thành công");

      const userId = res.data?.data?.userId;
      yield call(getInforUser, {
        payload: { userId: userId },
      });
      yield call(getInforUserCartMethod, {
        payload: { userId: userId },
      });
      yield call(getInforDeliveryAddressMethod, {
        payload: { id: userId },
      });

      console.log("DANG nHAP THANH CONG");
      // navigate("Home");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("SAI TAI KHOAN HOAC MAT KHAU");
      alert(res.data.retText);
    }
  } catch (e) {
    console.log("LOGIN_FAILED", e);
  } finally {
  }
}

function* signUpMethod({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(signup, {
      ...payload,
    });

    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      alert("Đăng kí thành công");

      console.log("DANG KY THANH CONG");
    } else {
      console.log("DANG KY That bai");
    }
  } catch (e) {
    console.log("SIGUP_FAILED", e);
  } finally {
  }
}

function* getInforUserCartMethod({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(getInforUserCart, {
      ...payload,
    });
    // console.log("ZO LAY GIO HANG", res.data);
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      yield put({
        type: Actions.SET_INFOR_USER_CART,
        payload: res.data.data?.listData || [],
      });

      // console.log("getInforUserCartMethod THANH CONG");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("getInforUserCartMethod sai gi do");
    }
  } catch (e) {
    console.log("getInforUserCartMethod FAILED", e);
  } finally {
  }
}

function* getInforDeliveryAddressMethod({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(getListInfoAddressDeliveryUser, {
      ...payload,
    });
    console.log("ZO LAY DIA CHI", res.data);
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      yield put({
        type: Actions.SET_INFOR_DELIVERY_ADDRESS,
        payload: res.data?.data || [],
      });

      // console.log("getInforUserCartMethod THANH CONG");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("getInforUserCartMethod sai gi do");
    }
  } catch (e) {
    console.log("getInforUserCartMethod FAILED", e);
  } finally {
  }
}

function* updateInforUserMethod({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(updateInforUser, {
      ...payload,
    });
    console.log("ZO UPDATE USER", res.data);
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      // yield put({
      //   type: Actions.SET_INFOR_DELIVERY_ADDRESS,
      //   payload: res.data?.data || [],
      // });
      alert("Thay đổi thành công");

      // console.log("Thay doi THANH CONG");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("updateInforUserMethod sai gi do");
    }
  } catch (e) {
    console.log("updateInforUserMethod FAILED", e);
  } finally {
  }
}

export default function* Saga() {
  yield takeEvery(Actions.LOGIN_USER, loginMethod);
  yield takeEvery(Actions.SIGN_UP_USER, signUpMethod);
  yield takeEvery(Actions.GET_INFOR_USER_CART, getInforUserCartMethod);
  yield takeEvery(
    Actions.GET_INFOR_DELIVERY_ADDRESS,
    getInforDeliveryAddressMethod
  );
  yield takeEvery(Actions.UPDATE_USER_INFOR, updateInforUserMethod);
}
