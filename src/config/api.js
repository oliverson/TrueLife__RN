export const BASE_URL_API = 'http://171.244.57.150:8081/api';
export const APP_NAME = 'TrueLife';
export default {
    /*Auth */
    POST_GET_PROFILE: '/User/GetProfile',
    POST_AUTH_SIGN_IN: '/User/Login',
    POST_AUTH_SIGN_UP: '/User/Register',
    RESET_PASSWORD: '/User/ForgotPassWordAsync',
    UPDATE_INFO_USER: '/User/UpdateInfoUserAsync',
    DETAIL_INFO_USER: '/User/DetailInfoUserAsync',

    /*Info User */


    /*Production*/
    GET_LIST_PRODUCT_CONTENT: '/Product/ListProductPortfolioUserAsync',
    GET_TOP_SIX_SELLING_PRODUCT: '/Product/TopSixSellingProducts',
    GET_TOP_SIX_NEW_PRODUCT: '/Product/TopSixNewProducts',
    GET_TOP_SIX_PRODUCT_PROMOTION: '/Product/TopSixProductPromotion',
    POST_SHOW_LIST_PRODUCT_FILTER: '/Product/ShowListProductFilter',
    POST_PRODUCT_DETAIL: '/Product/ProductDetailAsync'

}