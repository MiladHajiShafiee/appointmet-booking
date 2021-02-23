import * as types from '../types/seller';

export const sellerLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.SELLER_LOGIN_REQUEST:
            return { loading: true };
        case types.SELLER_LOGIN_SUCCESS:
            return { laoding: false, sellerInfo: action.payload };
        case types.SELLER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case types.SELLER_LOGOUT:
            return {};
        default:
            return state;
    }
};
