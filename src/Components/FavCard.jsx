import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavCard = ({item}) => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={{
          height: imgSize,
          width: imgSize * 0.65,
          resizeMode: 'stretch',
        }}
        source={{
          uri: `https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`,
        }}
      /> */}
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          height: '100%',
          justifyContent: 'space-between',
          paddingBottom: 10,
        }}>
        <View>
          <Text numberOfLines={1} style={{fontSize: 20, fontWeight: 'bold'}}>
            {item.title}
          </Text>
        </View>
        <View>
          <Text>Author(s) : {item.author}</Text>
          <Text numberOfLines={1}>Genre : {item.genre}</Text>
          <Text numberOfLines={1}>Description : {item.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default FavCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    elevation: 10,
  },
});
