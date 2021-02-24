import axios from 'axios';
import * as types from '../types/appointment';

export const listAppointments = () => async (dispatch, getState) => {
    const state = getState();
    const _id =
        state.sellerLogin &&
        state.sellerLogin.sellerInfo &&
        state.sellerLogin.sellerInfo._id &&
        state.sellerLogin.sellerInfo._id;
    const token =
        state.sellerLogin &&
        state.sellerLogin.sellerInfo &&
        state.sellerLogin.sellerInfo.token &&
        state.sellerLogin.sellerInfo.token;

    try {
        dispatch({ type: types.LIST_APPOINTMENTS_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const { data } = await axios.get(
            `http://localhost:5000/api/appointments/${_id}`,
            config
        );
        dispatch({ type: types.LIST_APPOINTMENTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: types.LIST_APPOINTMENTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const decideAppointment = (decision, slotId, appointmentId) => async (
    dispatch,
    getState
) => {
    const {
        sellerLogin: {
            sellerInfo: { token },
        },
    } = getState();

    try {
        dispatch({ type: types.APPOINTMENT_DECISION_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        const { data } = await axios.put(
            `http://localhost:5000/api/appointments/${appointmentId}`,
            { status: decision, slotId },
            config
        );
        dispatch({ type: types.APPOINTMENT_DECISION_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: types.APPOINTMENT_DECISION_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
