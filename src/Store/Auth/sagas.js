import { put, call, takeEvery } from "redux-saga/effects";

import * as Actions from "./constants";
import * as ActionAlert from "../alert/constants";
// import {  } from '../../Navigations';
import { RETCODE_SUCCESS, SUCCESS } from "../../config/constants";
import { login, signup } from "./service";
// import { navigate } from "../../Navigations/rootNavigation";
// import Auth from "../../config/routes/Auth";

function* loginMethod({ payload }) {
  console.log("CHAY ZO");
  try {
    // const dispatch = useDispatch();
    const res = yield call(login, {
      ...payload,
    });
    console.log("RES", res);
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      // console.log(
      //   'RESSsssdddsssss',
      //   JSON.stringify(res.data?.data?.listData, null, 4),
      // );
      // yield put({
      //   type: ActionAlert.SHOW_ALERT,
      //   payload: res?.data?.retText,
      // });

      console.log("DANG nHAP THANH CONG");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("SAI TAI KHOAN HOAC MAT KHAU");
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
    console.log("RES", res);
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      // console.log(
      //   'RESSsssdddsssss',
      //   JSON.stringify(res.data?.data?.listData, null, 4),
      // );
      // yield put({
      //   type: ActionAlert.SHOW_ALERT,
      //   payload: res?.data?.retText,
      // });
      console.log("DANG KY THANH CONG");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("SAI TAI KHOAN HOAC MAT KHAU");
    }
  } catch (e) {
    console.log("LOGIN_FAILED", e);
  } finally {
  }
}

export default function* Saga() {
  yield takeEvery(Actions.LOGIN_USER, loginMethod);
  yield takeEvery(Actions.SIGN_UP_USER, signUpMethod);
}
