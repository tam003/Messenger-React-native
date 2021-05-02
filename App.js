import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Login from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';
import Firebase from './Firebase/Firebase';
import Home from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export function NavLogin() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
            name="Login" 
            component={Login}
            options={{
              title: 'Đăng nhập',
            }} />
        <Stack.Screen 
          name="Signup" 
          component={SignUp}
          options={{
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user  : {}
    }
  }

  authListener = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({user})
      } else {
        this.setState({user : null})
      }
    })
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
          <>{this.state.user ? (<Home/>) : (<NavLogin/>)}</>
      )
  }
  
}

export default App;

