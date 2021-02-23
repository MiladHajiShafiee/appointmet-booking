import axios from 'axios';
import * as types from '../types/slot';

export const listSlots = () => async (dispatch, getState) => {
    const {
        sellerLogin: {
            sellerInfo: { token, _id },
        },
    } = getState();

    try {
        dispatch({ type: types.SLOTS_LIST_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const { data } = await axios.get(
            `http://localhost:5000/api/slots/seller/${_id}`,
            config
        );
        dispatch({ type: types.SLOTS_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: types.SLOTS_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createSlot = (slot) => async (dispatch, getState) => {
    const { start, end } = slot;

    const {
        sellerLogin: {
            sellerInfo: { token, _id },
        },
    } = getState();

    try {
        dispatch({ type: types.SLOT_CREATION_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const { data } = await axios.post(
            'http://localhost:5000/api/slots',
            { seller: _id, start, end },
            config
        );
        dispatch({ type: types.SLOT_CREATION_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: types.SLOT_CREATION_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteSlot = (slotId) => async (dispatch, getState) => {
    const {
        sellerLogin: {
            sellerInfo: { token },
        },
    } = getState();

    try {
        dispatch({ type: types.SLOT_DELETION_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const { data } = await axios.delete(
            `http://localhost:5000/api/slots/${slotId}`,
            config
        );
        dispatch({ type: types.SLOT_DELETION_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.SLOT_DELETION_FAIL, payload: error });
    }
};
