import axios from 'axios';
import * as types from '../types/seller';

export const loginSeller = (email, password, rememberMe) => async (
    dispatch
) => {
    try {
        dispatch({ type: types.SELLER_LOGIN_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.post(
            'http://localhost:5000/api/sellers/login',
            { email, password },
            config
        );
        dispatch({ type: types.SELLER_LOGIN_SUCCESS, payload: data });
        if (rememberMe) {
            localStorage.setItem('sellerInfo', JSON.stringify(data));
        }
    } catch (error) {
        dispatch({
            type: types.SELLER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logoutSeller = () => (dispatch) => {
    localStorage.removeItem('sellerInfo');
    dispatch({ type: types.SELLER_LOGOUT });
};
