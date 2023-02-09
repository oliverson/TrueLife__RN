import { put, call, takeEvery } from "redux-saga/effects";

import * as Actions from "./constants";
import {
  getListProductsContent,
  getProfile,
  getTopSixNewProducts,
  getTopSixProductsPromotion,
  getTopSixSellingProducts,
  signIn,
  signUp,
} from "./service";
import { APP_NAME } from "../../config/api";
import { RETCODE_SUCCESS, SUCCESS } from "../../config/constants";

function* getTopSixProductsPromotionMethod({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(getTopSixProductsPromotion, {
      ...payload,
    });
    console.log("RESgetTopSixProductsPromotionMethod", res.data);
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
        type: Actions.GET_TOP_SIX_PRODUCTS_PROMOTION_SUCCESS,
        payload: res?.data?.data?.listData || "",
      });
      console.log("GET DATAOK");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("SAI GI DO");
    }
  } catch (e) {
    console.log("LOGIN_FAILED", e);
  } finally {
  }
}
function* getTopSixNewProductsMethod({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(getTopSixNewProducts, {
      ...payload,
    });
    console.log("RESgetTopSixNewProductsMethod", res.data);
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
        type: Actions.GET_TOP_SIX_NEW_PRODUCTS_SUCCESS,
        payload: res?.data?.data?.listData,
      });
      console.log("GET DATAOK");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("SAI GI DO");
    }
  } catch (e) {
    console.log("LOGIN_FAILED", e);
  } finally {
  }
}
function* getTopSixSellingProductsMethod({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(getTopSixSellingProducts, {
      ...payload,
    });
    console.log("RESgetTopSixSellingProductsMethod", res.data);
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      // console.log(
      //   "RESSsssdddsssss",
      //   JSON.stringify(res.data?.data?.listData, null, 4)
      // );
      yield put({
        type: Actions.GET_TOP_SIX_SELLING_PRODUCTS_SUCCESS,
        payload: res?.data?.data?.listData,
      });
      console.log("GET DATAOK");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("SAI GI DO");
    }
  } catch (e) {
    console.log("LOGIN_FAILED", e);
  } finally {
  }
}
function* getListProductsContentMethod({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(getListProductsContent, {
      ...payload,
    });
    console.log("RESgetListProductsContentMethod", res.data);
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
        type: Actions.GET_LIST_PRODUCTS_CONTENT_SUCCESS,
        payload: res?.data?.data,
      });
      console.log("GET DATAOK");
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("SAI GI DO");
    }
  } catch (e) {
    console.log("LOGIN_FAILED", e);
  } finally {
  }
}

export default function* Saga() {
  yield takeEvery(
    Actions.GET_TOP_SIX_PRODUCTS_PROMOTION,
    getTopSixProductsPromotionMethod
  );
  yield takeEvery(Actions.GET_TOP_SIX_NEW_PRODUCTS, getTopSixNewProductsMethod);
  yield takeEvery(
    Actions.GET_TOP_SIX_SELLING_PRODUCTS,
    getTopSixSellingProductsMethod
  );
  yield takeEvery(
    Actions.GET_LIST_PRODUCTS_CONTENT,
    getListProductsContentMethod
  );
}
