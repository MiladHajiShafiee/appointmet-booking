import * as types from '../types/appointment';

export const appointmentDecisioinReducer = (
    state = { decidedAppointment: null },
    action
) => {
    switch (action.type) {
        case types.APPOINTMENT_DECISION_REQUEST:
            return { ...state, loading: true };
        case types.APPOINTMENT_DECISION_SUCCESS:
            return { loading: false, decidedAppointment: action.payload };
        case types.APPOINTMENT_DECISION_FAIL:
            return { laoding: false, error: action.payload };
        default:
            return state;
    }
};

export const listAppointmentReducer = (
    state = { appointments: [] },
    action
) => {
    switch (action.type) {
        case types.LIST_APPOINTMENTS_REQUEST:
            return { loading: true };
        case types.LIST_APPOINTMENTS_SUCCESS:
            return { loading: false, appointments: action.payload };
        case types.LIST_APPOINTMENTS_FAIL:
            return { laoding: false, error: action.payload };
        default:
            return state;
    }
};
