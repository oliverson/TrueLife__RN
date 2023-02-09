import * as Actions from './constants';

export function showAlert(payload) {
  return {
    type: Actions.SHOW_ALERT,
    payload,
  };
}

export function closeAlert() {
  return {
    type: Actions.CLOSE_ALERT,
  };
}
