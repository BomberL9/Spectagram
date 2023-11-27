import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component{
    render(){
        return(
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if(route.name === 'Feed'){
                            iconName = focused ? 'book' : 'book-outline';
                        }else if(route.name === 'Criar Post'){
                            iconName = focused ? 'create' : 'create-outline';
                        }

                        return <Ionicons name={iconName} color={color} size={size}/>
                    },
                    headerShown: false
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }}
            >
                <Tab.Screen name="Feed" component={Feed}/>
                <Tab.Screen name="Criar Post" component={CreatePost}/>
            </Tab.Navigator>
        );
    }
}