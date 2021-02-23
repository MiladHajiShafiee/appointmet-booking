import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { logoutSeller } from '../redux/actions/seller';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1.5),
    },
}));

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { sellerInfo } = useSelector((state) => state.sellerLogin);

    const logout = () => {
        dispatch(logoutSeller());
    };

    return (
        <div className='header'>
            <h2 className='title'>
                {sellerInfo && sellerInfo.name}
                <span id='at'>at</span>
                {sellerInfo && sellerInfo.storename}
            </h2>
            <IconButton onClick={logout} className={classes.margin}>
                <ExitToAppIcon />
            </IconButton>
        </div>
    );
};

export default Header;
