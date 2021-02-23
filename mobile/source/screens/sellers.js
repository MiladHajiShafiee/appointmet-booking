import React from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import List from '../components/list';
import Message from '../components/message';
import {getSellers} from '../redux/actions/client';
import SearchBar from '../components/search-bar';
import {sellersAndSlotsStyles as styles} from './styles';

const Sellers = ({navigation}) => {
  const dispatch = useDispatch();
  const [searchedSellers, setSearchedSellers] = React.useState([]);
  const {error, loading, sellers} = useSelector((state) => state.sellersList);

  React.useEffect(() => {
    dispatch(getSellers());
  }, [dispatch]);

  const searchTerm = (text) => {
    setSearchedSellers(() => sellers.filter((s) => s.name.includes(text)));
  };

  const goSellerPage = (sellerId, sellerName) => {
    navigation.navigate('Slots', {sellerId, sellerName});
  };

  return (
    <SafeAreaView style={styles.screen}>
      <SearchBar searchTerm={searchTerm} />
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <View style={styles.messageContainer}>
          <Message content={error} />
        </View>
      ) : (
        <List
          title="Sellers"
          tapItem={goSellerPage}
          data={searchedSellers.length === 0 ? sellers : searchedSellers}
        />
      )}
    </SafeAreaView>
  );
};

export default Sellers;
