import React from 'react';
import { StyleSheet, Text, TextInputComponent, View, TextInput, Button } from 'react-native';
import Firebase from '../Firebase/Firebase';
import AddUser from '../Firebase/User';
import styles from '../Style/Styles';
export default class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repass: '',
      errorMsg : null
    }
  }

  handleSignUp = () => {
    this.clearError()
    const {name, email, password} = this.state
    Firebase
      .auth()
      .createUserWithEmailAndPassword(email, password).then(() => {
        var userUID = Firebase.auth().currentUser.uid;
        AddUser(name, email, '', '', '', userUID);
      })
      .catch((err) => {
        switch(err.code) {
          case 'auth/email-already-in-use':
            this.setState({ errorMsg : 'Email đã được đăng ký.'})
            break;
          case 'auth/invalid-email':
            this.setState({ errorMsg : 'Email không hợp lệ. '})
            break;
          case 'auth/weak-password':
            this.setState({ errorMsg : 'Mật khẩu quá yếu. Tối thiểu 6 kí tự. '})
            break;

        }
      })
  }

  clearError() {
    this.setState({ errorMsg : null})
  }

  onSignup() {
    this.clearError();
    if ((this.state.email =='')  || (this.state.password =='') || (this.state.repass == '')){
      this.setState({ errorMsg : 'Vui lòng nhập đầy đủ thông tin.'})
    } else {
         if (this.state.repass == this.state.password) {
          this.handleSignUp();
        } else {
           this.setState({ errorMsg : 'Mật khẩu nhập lại không trùng khớp.'})
        }
    }
  }


  render(){
    return (
            <View style={styles.container}>
                <Text  style={styles.title}>Đăng ký tài khoản</Text>
                <TextInput  
                    style={styles.input} 
                    placeholder="Họ và Tên..." 
                    autofocus 
                    onChangeText = { name => this.setState({ name }) }
                    value = { this.state.name }/>
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
                    <TextInput  
                    style={styles.input} 
                    placeholder="Nhập lại mật khẩu..." 
                    secureTextEntry={true}
                    onChangeText = { repass => this.setState({ repass }) }
                    value = { this.state.repass }
                    />
                <View style={ {margin: 10, width:'80%'}}>
                    <Button
                     title='Đăng ký' 
                     onPress={ () =>{this.onSignup() }} />
                    </View>
                <View style={ {margin: 10, width:'80%'}}> 
                    <Button title={'Đã có tài khoản?\nĐăng nhập'} color='#20f4f7'  onPress={() =>{  this.props.navigation.goBack()}}/>
                    </View>
                <View>
                  <Text style={ styles.error}>{this.state.errorMsg}</Text>
                </View>
                </View> 
    );
  }
};

