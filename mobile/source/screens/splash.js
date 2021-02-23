import React from 'react';
import {Text, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {splashStyles as styles} from './styles';
import {loginClientFromStorage} from '../redux/actions/client';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loginClientFromStorage());
    const timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Appointment Booking</Text>
    </View>
  );
};

export default Splash;
