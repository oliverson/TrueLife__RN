import { put, call, takeEvery, take } from "redux-saga/effects";

import * as Actions from "./constants";
import {
  getListProductsContent,
  getListProductsFillter,
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
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      yield put({
        type: Actions.GET_LIST_PRODUCTS_CONTENT_SUCCESS,
        payload: res?.data?.data,
      });
      // navigate(Auth.AuthStack.screens.SignIn_SignUp.name);
    } else {
      console.log("SAI GI DO");
    }
  } catch (e) {
    console.log("LOGIN_FAILED", e);
  } finally {
  }
}

function* getListProductsFillterMethod({ payload }) {
  yield put({
    type: Actions.SET_LOADING_LIST_PRODUCTS_FILLTER,
    payload: true,
  });
  try {
    const res = yield call(getListProductsFillter, {
      ...payload,
    });
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      yield put({
        type: Actions.SET_LIST_PRODUCTS_FILLTER,
        payload: res.data.data?.listData || [],
      });
    } else {
      console.log("SAI GI DO");
    }
  } catch (e) {
    console.log("LOGIN_FAILED", e);
  } finally {
    yield put({
      type: Actions.SET_LOADING_LIST_PRODUCTS_FILLTER,
      payload: false,
    });
  }
}

function* getProductDetailsMethod({ payload }) {
  try {
    // const dispatch = useDispatch();
    const res = yield call(getProductDetails, {
      ...payload,
    });
    console.log("getProductDetailsMethod", res.data);
    if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
      // yield put({
      //   type: Actions.SET_DETAILS_PRODUCT,
      //   payload: res.data.data?.listData || [],
      // });
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
  yield takeEvery(
    Actions.GET_LIST_PRODUCTS_FILLTER,
    getListProductsFillterMethod
  );
  yield takeEvery(Actions.GET_DETAILS_PRODUCT, getProductDetailsMethod);
}
