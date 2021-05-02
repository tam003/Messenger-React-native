import {  Text, View, TouchableHighlight, Image } from 'react-native';
import React from 'react';
import styles from '../Style/Styles';
import Firebase from '../Firebase/Firebase';

class ProfileScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
           id: '',
           name: '',
           avatar: '',
           addr: '',
           birthdate: '',
           email: '',
        }
      }

    
    handleLogout() {
        Firebase.auth().signOut();
    }
    async componentDidMount() {
         
        Firebase.database().ref('users/'+ Firebase.auth().currentUser.uid).once('value', (dataSnapshot)=>{
        const _value = dataSnapshot.val()
        this.setState({ name : _value.name })
        this.setState({ email : _value.email })
        this.setState({ birthdate : _value.birthdate })
        this.setState({ addr : _value.addr })
        this.setState({ avatar : _value.avatar })
      });
      
    }


    render() {
        
        return (
            <View style={styles.container}>
                    <Text>Hồ sơ cá nhân</Text>
                    <View style={styles.avatar}>
                        <Image
                            styles={{resizeMode: 'stretch', width: 100, height: 100, margin: 10}}
                            source={{uri : 'https://lh3.googleusercontent.com/proxy/6Tum1xCpQDwbe6LF4rl-RSHEXzA3S4PIBTTbnMSZH4Gob941k3U9lyYLSWVETHsDatTjAuFYvl_ki2JPM_hi_Z_DZLN19sqFa0hpz9yGgw'}}/>
                    </View>
                    <Text  style={ {fontSize:18}}>{this.state.name}</Text>
                    <Text  style={ {fontSize:16}}>Ngày sinh : {this.state.birthdate}</Text>
                    <Text  style={ {fontSize:16}}>Email : {this.state.email}</Text>
                    <Text  style={ {fontSize:16}}>Địa chỉ : {this.state.addr}</Text>
                    <TouchableHighlight onPress={ () =>{  this.handleLogout()}}>
                        <Text  style={styles.error}>Đăng xuất</Text>
                    </TouchableHighlight>
            </View>
        )
    }

}

export default ProfileScreen