import React from 'react';

import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    alert: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        },
    },
}));

export default function Message({ type, content, styles }) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={styles}>
            <Alert variant='filled' severity={type} className={classes.alert}>
                {content}
            </Alert>
        </div>
    );
}
