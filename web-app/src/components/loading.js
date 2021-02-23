import React from 'react';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';

const Loading = ({ styles }) => {
    return (
        <Grid
            container
            style={styles}
            justify='center'
            alignItems='center'
            className='loading'
        >
            <CircularProgress />
        </Grid>
    );
};

export default Loading;
