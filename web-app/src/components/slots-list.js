import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import SlotItem from './slot-item';
import Loading from '../components/loading';

import { listSlots } from '../redux/actions/slot';

const SlotsList = () => {
    const dispatch = useDispatch();
    const { decidedAppointment } = useSelector(
        (state) => state.decidedAppointment
    );
    const { slots, loading } = useSelector((state) => state.slotsList);
    const { deletedSlot } = useSelector((state) => state.deletedSlot);
    const { createdSlot } = useSelector((state) => state.createdSlot);

    React.useEffect(() => {
        dispatch(listSlots());
    }, [dispatch, deletedSlot, createdSlot, decidedAppointment]);

    return (
        <div className='slots-list'>
            {loading ? (
                <Loading />
            ) : (
                slots &&
                slots.map((slot) => {
                    return <SlotItem slot={slot} key={slot && slot._id} />;
                })
            )}
        </div>
    );
};

export default SlotsList;
