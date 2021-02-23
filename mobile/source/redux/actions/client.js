import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {URL} from '../../api';
import * as types from '../types/client';

export const loginClientFromStorage = () => async (dispatch) => {
  try {
    const stringifiedClientInfo = await AsyncStorage.getItem('clientInfo');
    const clientInfo = JSON.parse(stringifiedClientInfo);
    if (clientInfo !== null) {
      dispatch({
        type: types.CLIENT_LOGIN_SUCCESS,
        payload: clientInfo,
      });
    }
  } catch (error) {}
};

export const loginClient = (email, password, rememberMe) => async (
  dispatch,
) => {
  try {
    dispatch({type: types.CLIENT_LOGIN_REQUEST});
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const {data} = await axios.post(
      `${URL}:5000/api/clients/login`,
      {email, password},
      config,
    );
    dispatch({type: types.CLIENT_LOGIN_SUCCESS, payload: data});
    if (rememberMe) {
      console.log('saving');
      await AsyncStorage.setItem('clientInfo', JSON.stringify(data));
    }
  } catch (error) {
    dispatch({
      type: types.CLIENT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutClient = () => async (dispatch) => {
  await AsyncStorage.removeItem('clientInfo');
  dispatch({type: types.CLIENT_LOGOUT});
};

export const getSellers = () => async (dispatch, getState) => {
  const {
    clientLogin: {
      clientInfo: {token},
    },
  } = getState();

  try {
    dispatch({type: types.GET_SELLERS_REQUEST});
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const {data} = await axios.get(`${URL}:5000/api/sellers`, config);
    dispatch({type: types.GET_SELLERS_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: types.GET_SELLERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
