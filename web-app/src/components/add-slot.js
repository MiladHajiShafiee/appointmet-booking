import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './styles.css';
import TimePicker from './time-picker';
import { createSlot } from '../redux/actions/slot';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const AddSlot = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [slot, setSlot] = useState({});

    const setTime = (type, time) => {
        setSlot((prevSlot) => ({
            ...prevSlot,
            [type]: time,
        }));
    };

    const addSlot = () => {
        if (slot.start && slot.end) {
            dispatch(createSlot(slot));
            setSlot({ start: '', end: '' });
        } else {
            alert('please select start and end time');
        }
    };

    return (
        <div className='add-slot'>
            <h5>From</h5>
            <TimePicker type='start' time={slot.start} setTime={setTime} />
            <h5>To</h5>
            <TimePicker type='end' time={slot.end} setTime={setTime} />
            <IconButton className={classes.margin} onClick={addSlot}>
                <AddCircleIcon fontSize='default' />
            </IconButton>
        </div>
    );
};

export default AddSlot;
