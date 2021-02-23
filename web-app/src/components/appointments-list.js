import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Loading from './loading';
import AppointmentItem from './appointment-item';
import { listAppointments } from '../redux/actions/appointment';

const AppointmentsList = () => {
    const dispatch = useDispatch();
    const { loading, appointments } = useSelector(
        (state) => state.appointmentsList
    );
    const { decidedAppointment } = useSelector(
        (state) => state.decidedAppointment
    );
    const { deletedSlot } = useSelector((state) => state.deletedSlot);

    React.useEffect(() => {
        dispatch(listAppointments());
    }, [dispatch, deletedSlot, decidedAppointment]);

    return (
        <div className='appointments-list' id='appointment-list'>
            {loading ? (
                <Loading />
            ) : (
                appointments.map((appointment) => {
                    return (
                        <AppointmentItem
                            appointment={appointment}
                            key={appointment && appointment._id}
                        />
                    );
                })
            )}
        </div>
    );
};

export default AppointmentsList;
