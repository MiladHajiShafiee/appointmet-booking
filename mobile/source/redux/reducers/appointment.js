import * as types from '../types/appointment';

export const createAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case types.APPOINTMENT_CREATION_REQUEST:
      return {loading: true};
    case types.APPOINTMENT_CREATION_SUCCESS:
      return {laoding: false, appointment: action.payload};
    case types.APPOINTMENT_CREATION_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
