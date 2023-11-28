import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

export default class DrawerNavigation extends Component{
    render(){
        return(
            <Drawer.Navigator screenOptions={() => ({headerShown: false})}>
                <Drawer.Screen name="Início" component={TabNavigator}/>
                <Drawer.Screen name="Perfil" component={Profile}/>
            </Drawer.Navigator>
        );
    }
}