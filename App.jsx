import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Home from './src/Views/Home';
import Favorite from './src/Views/Favorite';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Autocomplete from 'react-native-autocomplete-input';

const Tab = createBottomTabNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');

  const findBook = async () => {
    let response = await fetch(`https://openlibrary.org/search.json`);
  };

  return (
    <Autocomplete
      autoCapitalize="none"
      autoCorrect={false}
      containerStyle={{
        width: windowWidth - 10,
        backgroundColor: 'green',
        justifyContent: 'center',
      }}
      // Data to show in suggestion
      data={searchedBooks}
      // Default value if you want to set something in input
      defaultValue={
        JSON.stringify(selectedBook) === '{}' ? '' : selectedBook.title
      }
      // Onchange of the text changing the state of the query
      // Which will trigger the findFilm method
      // To show the suggestions
      onChangeText={text => {
        if (text.length > 3) {
          findBook(text);
        }
      }}
      placeholder="Enter Book  title"
      renderItem={({item}) => (
        // For the suggestion view
        <TouchableOpacity
          onPress={() => {
            setSelectedBook(item);
            setSearchedBooks([]);
          }}>
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'All') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerTitle: () => <Header />,
          headerStyle: {
            flex: 1,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          },
          headerLeftContainerStyle: {
            backgroundColor: 'black',
            width: 0,
            height: 0,
          },
          headerTitleContainerStyle: {
            backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            alignContent: 'center',
          },
          headerRightContainerStyle: {
            backgroundColor: 'pink',
            width: 0,
            height: 0,
          },
          tabBarLabelStyle: {backgroundColor: 'blue'},
        })}>
        <Tab.Screen name="All" component={Home} />
        <Tab.Screen name="Favorites" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
