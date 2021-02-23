import React from 'react';
import {View, Image, TextInput} from 'react-native';

import {searchBarStyles as styles} from './styles';

const SearchBar = ({searchTerm}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../assets/icons/search-image.png')}
      />
      <TextInput
        placeholder="search ..."
        style={styles.textInput}
        onChangeText={(t) => searchTerm(t.toLowerCase())}
      />
    </View>
  );
};

export default SearchBar;
