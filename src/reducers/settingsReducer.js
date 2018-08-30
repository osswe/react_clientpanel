import * as actionTypes from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case actionTypes.DISABLE_BALANCE_ON_ADD: {
      return { ...state, disableBalanceOnAdd: action.payload }
    }
    case actionTypes.DISABLE_BALANCE_ON_EDIT: {
      return { ...state, disableBalanceOnEdit: action.payload }
    }
    case actionTypes.ALLOW_REGISTRATION: {
      return { ...state, allowRegistration: action.payload }
    }
    default:
      return state;
  }
}