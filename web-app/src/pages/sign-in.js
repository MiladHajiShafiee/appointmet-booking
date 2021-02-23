import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Loading from '../components/loading';
import Message from '../components/message';
import { loginSeller } from '../redux/actions/seller';

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='#'>
                Appointment Booking
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: theme.spacing(8),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn({ history, location }) {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemembered, setIsRemembered] = useState(false);
    const { error, loading, sellerInfo } = useSelector(
        (state) => state.sellerLogin
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (sellerInfo) {
            history.push('/Home');
        }
    }, [history, sellerInfo]);

    const signIn = (e) => {
        e.preventDefault();
        dispatch(loginSeller(email, password, isRemembered));
    };

    return (
        <Container component='main' maxWidth='xs' className={classes.root}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <div className='event-container'>
                    {error && <Message type={'error'} content={error} />}
                    {loading && (
                        <Loading styles={{ backgroundColor: '#fafafa' }} />
                    )}
                </div>
                <form className={classes.form} noValidate onSubmit={signIn}>
                    <TextField
                        required
                        fullWidth
                        id='email'
                        autoFocus
                        name='email'
                        margin='normal'
                        variant='outlined'
                        label='Email Address'
                        autoComplete='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id='password'
                        type='password'
                        label='Password'
                        margin='normal'
                        name='password'
                        variant='outlined'
                        autoComplete='current-password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        label='Remember me'
                        control={
                            <Checkbox
                                color='primary'
                                checked={isRemembered}
                                onChange={() =>
                                    setIsRemembered((prevState) => !prevState)
                                }
                            />
                        }
                    />
                    <Button
                        fullWidth
                        type='submit'
                        color='primary'
                        onClick={signIn}
                        variant='contained'
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
