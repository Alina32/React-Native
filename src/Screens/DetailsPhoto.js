import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions,} from 'react-native';

const { width } = Dimensions.get('screen');


export default class FullPhotoScreen extends Component {
    render(){
    const { desc, url } = this.props.route.params;
    return (
      <View style={styles.wrapper}>
      <Text style={styles.desc}>{desc}</Text>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}              
        />

      </View>
  );
 } 
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderWidth: 0.5,
    borderColor: 'teal',
  },
  desc: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'dimgray',
    marginBottom: 5,

  }
});