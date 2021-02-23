import * as types from '../types/client';

export const clientLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CLIENT_LOGIN_REQUEST:
      return {loading: true};
    case types.CLIENT_LOGIN_SUCCESS:
      return {laoding: false, clientInfo: action.payload};
    case types.CLIENT_LOGIN_FAIL:
      return {loading: false, error: action.payload};
    case types.CLIENT_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const getSellersReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_SELLERS_REQUEST:
      return {loading: true};
    case types.GET_SELLERS_SUCCESS:
      return {laoding: false, sellers: action.payload};
    case types.GET_SELLERS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
