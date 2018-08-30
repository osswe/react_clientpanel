import * as actionTypes from './types';

export const setDisableBalanceOnAdd = () => {
  const settings = JSON.parse(localStorage.getItem('settings'));
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: actionTypes.DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  }
};
export const setDisableBalanceOnEdit = () => {
  const settings = JSON.parse(localStorage.getItem('settings'));
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: actionTypes.DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  }
};
export const setAllowRegistration = () => {
  const settings = JSON.parse(localStorage.getItem('settings'));
  settings.allowRegistration = !settings.allowRegistration;
  localStorage.setItem('settings', JSON.stringify(settings));

  return {
    type: actionTypes.ALLOW_REGISTRATION,
    payload: settings.allowRegistration,
  }
};
