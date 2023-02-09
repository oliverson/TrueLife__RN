import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { BASE_URL_API } from '../config/api';


const axiosCreate = axios.create({
  baseURL: BASE_URL_API,
  // You can add your headers here
});

axiosCreate
  .request({
    baseURL: BASE_URL_API,
    // You can add your headers here
  })
  .catch(function (error) {
    if (!error.response) {
      // network error
      // console.error('network error');
      // console.error(error);
    } else {
      // console.error('Error status');
      // console.error(error);
      // http status code
      const code = error.response.status;
      if (code === 500) {
        showMessage(
          {
            message: 'Thông Báo',
            description:
              'Có lỗi từ hệ thống, vui lòng liên hệ bộ phận CSKH hotline: 0939279868 để được hỗ trợ, trân trọng cảm ơn',
            type: 'error',
          },
          5000,
        );
      }
      const response = error.response.data;
    }
  });

axiosCreate.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.data) {
      // useHookSlackError(error.response.data);
      return Promise.reject(error.response.data);
    }
    // console.error('network error');
    // console.error(error);
    // useHookSlackError(error.response.data);
    return Promise.reject(error.message);
  },
);
axiosCreate.interceptors.request.use(request => {
  // console.log('REQUEST', request);
  return request;
});

export default axiosCreate;
