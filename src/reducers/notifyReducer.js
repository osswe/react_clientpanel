import * as actionTypes from '../actions/types';

const initialState = {
  message: null,
  messageType: null
};


export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      }
    default:
      return state;
  }
}