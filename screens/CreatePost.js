import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CreatePost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Criar Post </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    }
})