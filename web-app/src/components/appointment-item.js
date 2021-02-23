import React from 'react';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { decideAppointment } from '../redux/actions/appointment';

const AppointmentItem = ({ appointment }) => {
    const {
        _id,
        slotId,
        status,
        clientName,
        slotTime: { end, start },
    } = appointment;
    const dispatch = useDispatch();

    const decide = (decision) => {
        dispatch(decideAppointment(decision, slotId, _id));
    };

    return (
        <div className='appointment-item'>
            <div className='appointment-item-request'>
                <p
                    id='time-text'
                    style={{
                        color: appointment.status !== 'pending' && 'darkgray',
                    }}
                >
                    <b id='client'>{clientName.toUpperCase()}</b> requests
                    <span className='preposition'> from</span>{' '}
                    {moment(start).format('MMMM Do YYYY, h:mm:ss a')}
                    <span className='preposition'> to</span>{' '}
                    {moment(end).format('MMMM Do YYYY, h:mm:ss a')}
                </p>
            </div>
            <div className='request-button-container'>
                {status === 'pending' ? (
                    <>
                        <Button
                            variant='contained'
                            style={{
                                ...styles.button,
                                backgroundColor: 'lightgreen',
                            }}
                            onClick={() => decide('accepted')}
                        >
                            accept
                        </Button>
                        <Button
                            variant='contained'
                            style={{
                                ...styles.button,
                                backgroundColor: 'tomato',
                            }}
                            onClick={() => decide('denied')}
                        >
                            deny
                        </Button>
                    </>
                ) : (
                    <h5
                        className='status'
                        style={{
                            backgroundColor:
                                status === 'accepted' ? 'lightgreen' : 'tomato',
                        }}
                    >
                        {status.toUpperCase()}
                    </h5>
                )}
            </div>
        </div>
    );
};

const styles = {
    button: {
        width: '4.5rem',
        color: 'white',
        padding: '5px',
        fontSize: '0.7rem',
        boxShadow: 'none',
    },
};

export default AppointmentItem;
