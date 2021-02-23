import React from 'react';
import {Text, View} from 'react-native';

import {messageStyles as styles} from './styles';

const Message = ({content}) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{content}</Text>
    </View>
  );
};

export default Message;
