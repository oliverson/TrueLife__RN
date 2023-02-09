import * as Actions from './constants';

const initState = {
  show: false,
  title: null,
  message: null,
  type: null,
  duration: 3,
};

const AlertReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case Actions.SHOW_ALERT: {
      return {
        ...state,
        ...action.payload,
        show: true,
      };
    }
    case Actions.CLOSE_ALERT: {
      return initState;
    }

    default:
      return state;
  }
};

export default AlertReducer;
