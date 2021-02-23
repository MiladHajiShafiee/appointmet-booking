import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {listItemStyles as styles} from './styles';
import {createAppointment} from '../redux/actions/appointment';

const ListItem = ({title, item, sellerId, sellerName, tapItem}) => {
  const type = title === 'Slots';
  const dispatch = useDispatch();
  const {loading, appointment} = useSelector((state) => state.appointment);

  const reserveSlot = () => {
    dispatch(createAppointment(item, sellerId, sellerName));
  };

  const getButtonText = () => {
    if (item.isReserved) {
      return 'Reserved';
    } else {
      if (appointment) {
        if (appointment.slotId === item._id) {
          if (loading) {
            return 'Sending';
          } else {
            if (appointment) {
              return 'Sent';
            } else {
              return 'Retry';
            }
          }
        } else {
          return 'Request';
        }
      } else {
        return 'Request';
      }
    }
  };

  const getButtonColor = () => {
    if (item.isReserved) {
      return 'lightgreen';
    } else {
      if (appointment) {
        if (appointment.slotId === item._id) {
          if (loading) {
            return 'blue';
          } else {
            if (appointment) {
              return 'blue';
            } else {
              return 'tomato';
            }
          }
        } else {
          return 'darkorchid';
        }
      } else {
        return 'darkorchid';
      }
    }
  };

  return (
    <TouchableOpacity
      disabled={type}
      style={styles.listItem}
      onPress={() => tapItem(item._id, item.name)}>
      <Text
        style={{
          ...styles.itemText,
          fontSize: type ? hp('1.6%') : hp('2.2'),
        }}>
        {type ? `From ${item.start} to ${item.end}` : item.name}
      </Text>
      {type && (
        <TouchableOpacity
          style={{
            ...styles.reserveButton,
            backgroundColor: getButtonColor(),
          }}
          onPress={reserveSlot}>
          <Text style={styles.reserveText}>{getButtonText()}</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default ListItem;
