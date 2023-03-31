import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
const Search = () => {
  const {data} = useSelector(state => state.product);
  console.log('.......data search', data);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <Text>Search</Text>
      </View>
    </SafeAreaView>
  );
};
export default Search;
