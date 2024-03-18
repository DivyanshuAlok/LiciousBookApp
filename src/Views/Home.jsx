import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../Components/Card';

const Home = () => {
  const [bookList, setBookList] = useState([]);

  const fetchBook = async () => {
    let response = await fetch(
      'https://openlibrary.org/subjects/sci-fi.json?details=true',
    );
    let data = await response.json();
    setBookList(data.works);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <React.StrictMode>
      <FlatList
        data={bookList}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.key}
      />
    </React.StrictMode>
  );
};

export default Home;

const styles = StyleSheet.create({});
