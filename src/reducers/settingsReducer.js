import * as actionTypes from '../actions/types';

const initialState = {
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: false,
  allowRegistration: false,
};


export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.DISABLE_BALANCE_ON_ADD: {
      return { ...state, disableBalanceOnAdd: !state.disableBalanceOnAdd }
    }
    case actionTypes.DISABLE_BALANCE_ON_EDIT: {
      return { ...state, disableBalanceOnEdit: !state.disableBalanceOnEdit }
    }
    case actionTypes.ALLOW_REGISTRATION: {
      return { ...state, allowRegistration: !state.allowRegistration }
    }
    default:
      return state;
  }
}