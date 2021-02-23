import axios from 'axios';
import {URL} from '../../api';
import * as types from '../types/appointment';

export const createAppointment = (slot, sellerId, sellerName) => async (
  dispatch,
  getState,
) => {
  const {
    clientLogin: {
      clientInfo: {_id, name, token},
    },
  } = getState();
  const {start, end} = slot;

  try {
    dispatch({type: types.APPOINTMENT_CREATION_REQUEST});
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const {data} = await axios.post(
      `${URL}:5000/api/appointments`,
      {
        sellerId,
        sellerName,
        clientId: _id,
        slotId: slot._id,
        clientName: name,
        slotTime: {start, end},
      },
      config,
    );
    dispatch({type: types.APPOINTMENT_CREATION_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: types.APPOINTMENT_CREATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
