import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux';

import './styles.css';
import Header from '../components/header';
import AddSlot from '../components/add-slot';
import Message from '../components/message';
import SlotsList from '../components/slots-list';
import AppoinmentsList from '../components/appointments-list';

const Home = ({ history }) => {
    const { error } = useSelector((state) => state.createdSlot);
    const { sellerInfo } = useSelector((state) => state.sellerLogin);

    useEffect(() => {
        if (!sellerInfo) {
            history.push('/');
        }
    }, [history, sellerInfo]);

    return (
        <div className='home'>
            <Header />
            <div className='main-container'>
                <Grid
                    item
                    xs={11}
                    md={5}
                    style={{ margin: '2rem 0' }}
                    className='sub-container'
                >
                    <div className='sub-container-header'>
                        {error && (
                            <Message
                                type='error'
                                content={error}
                                styles={{
                                    right: '1rem',
                                    width: '60%',
                                    position: 'absolute',
                                }}
                            />
                        )}
                        <h4 className='sub-container-title'>Edit time slots</h4>
                    </div>
                    <AddSlot />
                    <SlotsList />
                </Grid>
                <Grid
                    item
                    xs={11}
                    md={6}
                    className='sub-container'
                    style={{ margin: '2rem 0' }}
                >
                    <h4 className='sub-container-title'>Appointments</h4>
                    <AppoinmentsList />
                </Grid>
            </div>
        </div>
    );
};

export default Home;
