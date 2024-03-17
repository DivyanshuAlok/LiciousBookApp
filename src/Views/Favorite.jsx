import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';
import Card from '../Components/Card';

const Favorite = () => {
  const bookList = useSelector(state => state.fav);

  return (
    <View>
      <Text>Favorite</Text>
      <FlatList
        data={bookList}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
