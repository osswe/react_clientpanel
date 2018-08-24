import * as actionTypes from './types';

export const notifyUser = (message, messageType) => {
  return {
    type: actionTypes.NOTIFY_USER,
    message,
    messageType
  }
};
