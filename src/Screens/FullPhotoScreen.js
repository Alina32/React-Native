import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class FullPhotoScreen extends Component {
   render() {
    
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          activeOpacity={0.6}
          onPress={() => alert('Press')}>
          <Text>Second screen!</Text>
        </TouchableOpacity>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
