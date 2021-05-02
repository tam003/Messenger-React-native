import React from 'react';
import {  Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import ListMessage from '../screens/Message/ListMessage'
import AddMessage from '../screens/Message/AddMessage'
import EditMessage from '../screens/Message/EditMessage'
import ViewMessage from '../screens/Message/ViewMessage'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

export function TabMessage() {
    return (
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen 
              name="List" 
              component={ListMessage}
              options={{
                //headerShown: false
                title: 'Danh sách',
                headerTitleAlign: 'center',
                headerRight:   () => (
                  <TouchableOpacity>
                    <MaterialCommunityIcons 
                    name="feather" 
                    color={'#000000'} 
                    size={20} 
                    style={ {marginRight: 10}} />
                  </TouchableOpacity>
                ),
              }} />
          <Stack.Screen 
            name="Add" 
            component={AddMessage}
            options={{
              //headerShown: false
            }} />
            <Stack.Screen 
            name="Edit" 
            component={EditMessage}
            options={{
              //headerShown: false
            }} />
            <Stack.Screen 
            name="View" 
            component={ViewMessage}
            options={
              //headerShown: false
              ({ route }) => ({ title: route.params.name })
            } />
        </Stack.Navigator>
    );
  }

  export default TabMessage

  