import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {addFav} from '../Redux/FavSlice';

const Card = ({item}) => {
  const [author, setAuthor] = useState('');
  const [fav, setFav] = useState(false);
  const [description, setDescription] = useState('');
  const [ratio, setRatio] = useState(1);
  const [genre, setGenre] = useState('');
  let imgSize = 130;
  const dispatch = useDispatch();

  const fetchDetails = async () => {
    let response = await fetch(`https://openlibrary.org${item.key}.json`);
    let data = await response.json();
    if (typeof data.description == 'string') {
      setDescription(data.description);
    } else if (typeof data.description == 'object') {
      setDescription(data.description.value);
    } else {
      setDescription(item.title);
    }
    setGenre(data.subjects.map(genre => genre).join(', '));
  };

  const handleFavToggle = () => {
    const book = {
      key: item.key,
      link: `https://openlibrary.org${item.key}.json`,
      name: item.title,
      author: author,
      description: description,
      genre: genre,
    };

    if (fav) {
      console.log('removed from Fav');
    } else {
      dispatch(
        addFav({
          key: item.key,
          link: `https://openlibrary.org${item.key}.json`,
          name: item.title,
          author: author,
          description: description,
          genre: genre,
        }),
      );
      console.log('add to fav');
    }
    setFav(!fav);
  };

  //https://openlibrary.org/works/OL41495W

  // Image.getSize(
  //   `https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`,
  //   (width, height) => {
  //     setRatio(width / height);
  //   },
  // );

  useEffect(() => {
    //set author string
    if (item.authors.length > 1) {
      setAuthor(item.authors.map(author => author.name).join(', '));
    } else {
      setAuthor(item.authors[0].name);
    }
    fetchDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{
          height: imgSize,
          width: imgSize * 0.65,
          resizeMode: 'stretch',
        }}
        source={{
          uri: `https://covers.openlibrary.org/b/id/${item.cover_id}-L.jpg`,
        }}
      />
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
          <Text>Author(s) : {author}</Text>
          <Text numberOfLines={1}>Genre : {genre}</Text>
          <Text>Publication : {item.first_publish_year}</Text>
          <Text numberOfLines={1}>Description : {description}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleFavToggle}>
        <Icon
          name={fav ? 'heart' : 'heart-o'}
          color={fav ? 'red' : 'black'}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

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
