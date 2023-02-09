import {createSelector} from 'reselect';

export const alert = state => state.alert;

export const alertDataSelector = createSelector(alert, data => data || null);
