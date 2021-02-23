import axios from 'axios';
import {URL} from '../../api';
import * as types from '../types/slot';

export const getSellerSlots = (sellerId) => async (dispatch, getState) => {
  const {
    clientLogin: {
      clientInfo: {token},
    },
  } = getState();

  try {
    dispatch({type: types.GET_SELLER_SLOTS_REQUEST});
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const {data} = await axios.get(
      `${URL}:5000/api/slots/seller/${sellerId}`,
      config,
    );
    dispatch({type: types.GET_SELLER_SLOTS_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: types.GET_SELLER_SLOTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
