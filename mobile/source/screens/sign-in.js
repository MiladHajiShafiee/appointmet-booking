import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

import {signInStyles as styles} from './styles';
import Message from '../components/message';
import {loginClient} from '../redux/actions/client';

// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({});
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const {error, loading, clientInfo} = useSelector(
    (state) => state.clientLogin,
  );

  useEffect(() => {
    if (clientInfo && clientInfo._id) {
      navigation.navigate('Sellers');
    } else if (error) {
      setMessage({
        visible: true,
        content: error,
      });
    }
  }, [error, clientInfo, navigation]);

  const signIn = () => {
    if (email && password) {
      setMessage({});
      dispatch(loginClient(email, password, rememberMe));
    } else {
      setMessage({
        visible: true,
        content: 'Please enter email and password',
      });
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.maintContainer}>
        <Text style={styles.text}>Sign In</Text>
        <View style={styles.loadingContainer}>
          {message.visible ? (
            <Message content={message.content} />
          ) : loading ? (
            <ActivityIndicator color="dimgray" size="large" />
          ) : (
            <View style={styles.lockIconContainer}>
              <Image
                style={styles.lockIcon}
                source={require('../assets/icons/locked-padlock.png')}
              />
            </View>
          )}
        </View>
        <TextInput
          value={email}
          placeholder="email"
          style={styles.signField}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry
          value={password}
          style={styles.signField}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            disabled={false}
            value={rememberMe}
            style={styles.checkBox}
            tintColors={{true: 'darkorchid', false: 'gray'}}
            onValueChange={(newValue) => setRememberMe(newValue)}
          />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setRememberMe(!rememberMe)}>
            <Text style={styles.checkBoxText}>Remember me</Text>
          </TouchableOpacity>
        </View>
        <Button title="Sign In" color="darkorchid" onPress={signIn} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
