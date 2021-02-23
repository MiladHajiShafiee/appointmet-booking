import * as types from '../types/slot';

export const getSellerSlotsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_SELLER_SLOTS_REQUEST:
      return {loading: true};
    case types.GET_SELLER_SLOTS_SUCCESS:
      return {laoding: false, slots: action.payload};
    case types.GET_SELLER_SLOTS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
