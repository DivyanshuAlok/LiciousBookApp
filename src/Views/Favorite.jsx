import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';
import FavCard from '../Components/FavCard';

const Favorite = () => {
  const bookList = useSelector(state => state.fav);

  return (
    <View>
      <FlatList
        data={bookList}
        renderItem={({item}) => <FavCard item={item} />}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
