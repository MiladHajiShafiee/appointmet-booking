import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            width: '140px',
        },
    },
}));

export default function TimePickers(props) {
    const classes = useStyles();
    const { time, type, setTime } = props;

    return (
        <form className={classes.container} noValidate>
            <TextField
                size='small'
                id='datetime-local'
                defaultValue={time}
                type='datetime-local'
                className={classes.textField}
                inputProps={{
                    step: 300, // 5 min
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                onChangeCapture={(e) => setTime(type, e.target.value)}
            />
        </form>
    );
}
