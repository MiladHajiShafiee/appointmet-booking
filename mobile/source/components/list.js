import React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import ListItem from './list-item';
import Message from './message';
import {listStyles as styles} from './styles';
import {logoutClient} from '../redux/actions/client';

const List = ({title, data, sellerId, sellerName, tapItem}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {error} = useSelector((state) => state.appointment);

  const logout = () => {
    navigation.navigate('SignIn');
    dispatch(logoutClient());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Image
            source={require('../assets/icons/logout-32.png')}
            style={styles.icon}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      {title === 'Slots' && error && (
        <View style={styles.messageContainer}>
          <Message content={error} />
        </View>
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (
            <ListItem
              title={title}
              item={item}
              sellerId={sellerId}
              tapItem={tapItem}
              sellerName={sellerName}
            />
          )}
        />
      </View>
    </View>
  );
};

export default List;
