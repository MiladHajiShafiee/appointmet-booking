import React from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import List from '../components/list';
import Message from '../components/message';
import {getSellerSlots} from '../redux/actions/slot';
import {sellersAndSlotsStyles as styles} from './styles';

const Slots = ({route}) => {
  const dispatch = useDispatch();
  const {sellerId, sellerName} = route.params;
  const {error, loading, slots} = useSelector((state) => state.sellerSlotsList);

  React.useEffect(() => {
    dispatch(getSellerSlots(sellerId));
  }, [dispatch, sellerId]);

  return (
    <SafeAreaView style={styles.screen}>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <View style={styles.messageContainer}>
          <Message content={error} />
        </View>
      ) : (
        <List
          title="Slots"
          data={slots}
          sellerId={sellerId}
          sellerName={sellerName}
        />
      )}
    </SafeAreaView>
  );
};

export default Slots;
