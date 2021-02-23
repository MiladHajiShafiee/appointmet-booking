import React from 'react';

import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteSlot } from '../redux/actions/slot';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const SlotItem = ({ slot }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const removeSlot = () => {
        dispatch(deleteSlot(slot._id));
    };

    return (
        <div className='slot-item'>
            <div className='slot-item-time'>
                <p
                    id='time-text'
                    style={{ color: slot.isReserved ? 'darkgray' : 'black' }}
                >
                    <span className='preposition'>From</span>{' '}
                    {moment(slot.start).format('MMMM Do YYYY, h:mm:ss a')}
                    <span className='preposition'> to</span>{' '}
                    {moment(slot.end).format('MMMM Do YYYY, h:mm:ss a')}
                </p>
            </div>
            {slot.isReserved ? (
                <span className='reserved'>reserved</span>
            ) : (
                <IconButton
                    aria-label='delete'
                    onClick={removeSlot}
                    disabled={slot.isReserved}
                    className={classes.margin}
                >
                    <DeleteIcon fontSize='small' />
                </IconButton>
            )}
        </div>
    );
};

export default SlotItem;
