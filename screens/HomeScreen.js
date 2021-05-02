import React from 'react';
import {  Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import TabContact from '../navigation/TabContact';
import TabMessage from '../navigation/TabMessage'

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

class Home extends React.Component {


    render() {
      return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Message"
          activeColor="cyan"
          style={{ backgroundColor: '#8b2fed' }}>
          <Tab.Screen
            name="Message"
            component={TabMessage}
            options={{
            tabBarLabel: 'Nhắn tin',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chat-processing-outline" color={color} size={26} />
              ),
            }} />
          <Tab.Screen
            name="Contact"
            component={TabContact}
            options={{
              tabBarLabel: 'Bạn bè',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
                ),
              }} />
          <Tab.Screen
            name="Profile" 
            component={ProfileScreen} 
            options={{
            tabBarLabel: 'Hồ sơ',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
              ),
              }} />
            
        </Tab.Navigator>
      </NavigationContainer>        
      )
  }
}

export default Home

export function Test() {
  return (
        <Stack.Navigator initialRouteName="test">
          <Stack.Screen 
              name="test" 
              component={test2}
              options={{
                headerShown: false
              }} />
              <Stack.Screen 
              name="test3" 
              component={test3}
              options={{
                headerShown: false
              }} />
      </Stack.Navigator>
);
}

export function test2() {
  return (
    <View>
      <Button 
              title={'Chưa có tài khoản?\nĐăng ký ngay'} 
              color='#20f4f7'  
              onPress={ ()=>{  this.navigation.navigate('test3') }}
              />
    </View>
  )
}

export function test3( {navigation}) {
  return (
    <View>
      <Text>123456</Text>
    </View>
  )
}
