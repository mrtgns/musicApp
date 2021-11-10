import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchbarStyle';

const Searchbar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={props.onSearch} />
    </View>
  );
};

export default Searchbar;
