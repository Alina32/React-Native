import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    author: 'Nervillo',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    author: 'Malina',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    author: 'Artem',
  },
  
];

function Item({ name, author }) {
  return (
    <View style={styles.container}>
    	<View style={styles.name}>
      		<Text>{name}</Text>
     	</View>
     	<View style={styles.author}>
    		<Text>{author}</Text>
    	</View>
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Photo')} 
      />
    </View>
  );
}


export default class HomeScreen extends Component {
   render() {
    
    return (
    	<SafeAreaView>
    	     <FlatList
    	       data={DATA}
    	       renderItem={({ item }) => <Item name={item.name} author={item.author} />}
    	       keyExtractor={item => item.id}
    	     />
    	</SafeAreaView>
	);
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 2,
    borderWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  name: {
  	height: 'auto',
  	width: 100,

  },

  author: {
  	height: 'auto',
  	width: 100,

  }
});
