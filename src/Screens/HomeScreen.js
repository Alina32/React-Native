import React, { Component } from 'react';
import { Image, StyleSheet, Text, SafeAreaView, View, FlatList, TouchableOpacity, Button } from 'react-native';
import Constants from 'expo-constants';

export default class HomeScreen extends Component {
	constructor(props) {
	 super(props);
	 this.state = {
	   loading: true,
	   photos:[]
	  };
	}

componentDidMount(){
  const { navigation } = this.props;
	fetch("https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043")
	.then(response => response.json())
	.then((responseJson)=> {
	  this.setState({
	   loading: false,
	   photos: responseJson
	  })
	})
	.catch(error=>console.log(error))
}    
render() {
  
    return (
    	<SafeAreaView>
    	    <FlatList
    	    	data={this.state.photos}
    	    	renderItem={({ item }) => 
    	    	    <View style={styles.container}>
	    	    	    <TouchableOpacity onPress={() => this.props.navigation.navigate('Photo', {title: item.user.name, desc: item.alt_description, url: item.urls.full})}>
	    	    	    	<Image
	    	    		        style={styles.tinyLogo}
	    	    		        source={{
	    	    		          uri: item.urls.small,
	    	    		        }}
	    	    	      	/>
						</TouchableOpacity>    	    	      	
    	    	 
    	    	      	<View style={styles.wrapper}>
    	    		     	<View style={styles.content}>
    	    		     		<Text style={styles.header}>Author:</Text>
    	    		     		<Text numberOfLines={1} style={styles.text}>{item.user.name}</Text>
    	    		    	</View>
    	    		    	<View style={styles.content}>
    	    		     		<Text style={styles.header}>Description:</Text>
    	    		     		<Text numberOfLines={1} style={styles.text}>{item.alt_description}</Text>
    	    		     	</View>
    	    		    </View>
    	    	    </View>}
    	    	keyExtractor={item=>item.id.toString()}
    	    />
    	</SafeAreaView>
	  );
  }
}

const styles = StyleSheet.create({	
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'teal',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  wrapper: {
  	flex: 1,
    flexDirection: 'column',
  },
  content: {
   	flexDirection: 'row',
    height: 'auto',
    width: 'auto',
 },
  tinyLogo: {
  	marginRight: 5,
    width: 60,
    height: 60,
    resizeMode: 'cover'
  },
  header: {
  	fontSize: 16,
  	fontWeight: 'bold',
  	marginRight: 8,
  	color: 'dimgray',
  	marginBottom: 5,
  },
  text: {
  	fontSize: 16,
  	marginRight: 8,
  	flex: 1,
  	color: 'lightslategrey',
  }
});
