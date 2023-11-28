import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native';
import PostCard from '../PostCard';

let posts = require("../temp_posts.json");

export default class Feed extends Component {
  renderItem = ({item: post}) => {
    return <PostCard post={post}/>
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Espectagrama</Text>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
          keyExtractor={this.keyExtractor}
          data={posts}
          renderItem={this.renderItem}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkblue'
    },
    droidSafeArea:{
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 35
    },
    titleView:{
      flex: 0.07,
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    titleText: {
      fontSize: 28,
      color: '#fff'
    },
    cardContainer: {
      flex: 0.93
    }
})