import React from 'react';
import {  Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import ListContact from '../screens/Contact/ListContact'
import AddContact from '../screens/Contact/AddContact'
import EditContact from '../screens/Contact/EditContact'
import ViewContact from '../screens/Contact/ViewContact'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

export function TabContact() {
    return (
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen 
              name="List" 
              component={ListContact}
              options={{
                //headerShown: false
                title: 'Danh sách bạn bè',
                headerTitleAlign: 'center',
              }} />
          <Stack.Screen 
            name="Add" 
            component={AddContact}
            
            options={{
              //headerShown: false
              title: 'Trở về',
            }} />
            <Stack.Screen 
            name="Edit" 
            component={EditContact}
            options={{
              //headerShown: false
            }} />
            <Stack.Screen 
            name="View" 
            component={ViewContact}
            options={{
              headerShown: false
            }} />
        </Stack.Navigator>
    );
  }

  export default TabContact

  