import React from 'react';
import { Text, View, TextInput, Button, } from 'react-native';
import Firebase from '../Firebase/Firebase';
import styles from '../Style/Styles';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMsg : null
    }
  }


   async handleLogin(){
    const {email, password} = this.state
    try {
      Firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) =>   {
          switch(err.code) {
            case 'auth/invalid-email':
              this.setState({ errorMsg : 'Email không hợp lệ. '})
              break;
            case 'auth/wrong-password':
              this.setState({ errorMsg : 'Sai mật khẩu. '})
              break;
            case 'auth/user-not-found':
              this.setState({ errorMsg : 'Không tìm thấy tài khoản. '})
              break;
            case 'auth/user-disable':
              this.setState({ errorMsg : 'Tài khoản đã bị khóa. '})
              break; 
          }
      })}catch (error) {
        alert(error);
      }
  }

  render() {

    return (
      <View style={styles.container}>
      <Text  style={styles.title}>Ứng dụng chat</Text>
        <TextInput  
          style={styles.input} 
          placeholder="Email..." 
          autofocus 
          onChangeText = { email => this.setState({ email }) }
          value = { this.state.email }/>
          <TextInput  
            style={styles.input} 
            placeholder="Mật khẩu..." 
            secureTextEntry={true}
            onChangeText = { password => this.setState({ password }) }
            value = { this.state.password }
           />
          <View style={ {margin: 10, width:'80%'}}>
            <Button title='Đăng nhập' onPress={ ()=>{this.handleLogin() }}/>
            </View>
          <View style={ {margin: 10, width:'80%'}}> 
            <Button 
              title={'Chưa có tài khoản?\nĐăng ký ngay'} 
              color='#20f4f7'  
              onPress={ ()=>{  this.props.navigation.navigate('Signup') }}
              />
            </View>
            <View>
                <Text style={ styles.error}>{this.state.errorMsg}</Text>
              </View>
      </View> 
     )
  }
}

export default Login;

