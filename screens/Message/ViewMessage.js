import {  Text, View, Button, SafeAreaView, FlatList, } from 'react-native'
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
//import launchImageLibrary from 'react-native-image-picker'
import styles from '../../Style/Styles'
import Firebase from '../../Firebase/Firebase'
import { InputField, ChatBox } from "../../component";
//import ImagePicker from 'react-native-image-crop-picker';

class ViewMessage extends React.Component {
    
  constructor(props) {
        super(props);
        this.state = {
            name : this.props.route.params.name,
            uid : this.props.route.params.uid,
            avatar : this.props.route.params.avatar,
            currentUserId : this.props.route.params.currentUserId,
            img : null,
            msgValue : '',
            messeges: []
        }
    }

  async componentDidMount(){
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
        })
        try {
            Firebase
              .database()
              .ref("messeges")
              .child(this.state.currentUserId)
              .child(this.state.uid)
              .on("value", (dataSnapshot) => {
                let msgs = [];
                dataSnapshot.forEach((child) => {
                  msgs.push({
                    sendBy: child.val().messege.sender,
                    recievedBy: child.val().messege.reciever,
                    msg: child.val().messege.msg,
                    img: child.val().messege.img,
                  });
                });
                this.setState({messeges : msgs.reverse()})
              });
          } catch (error) {
            alert(error);
          }
        
    }
    
    handleSend (){
        this.setState({msgValue : ''})
        if (this.state.msgValue) {
          this.senderMsg(this.state.msgValue, this.state.currentUserId, this.state.uid, "")
            .then(() => {})
            .catch((err) => alert(err));
    
          // * guest user
    
          this.recieverMsg(this.state.msgValue, this.state.currentUserId, this.state.uid, "")
            .then(() => {})
            .catch((err) => alert(err));
        }
    }
  
  /*handlerImage() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }

  handleCamera (){
      var options = {
        storageOptions: {
          skipBackup: true,
        },
      };
      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log("User cancel image picker");
        } else if (response.error) {
          console.log(" image picker error", response.error);
        } else {
          // Base 64
          let source = "data:image/jpeg;base64," + response.data;
  
          this.senderMsg(msgValue, currentUserId, guestUserId, source)
            .then(() => {})
            .catch((err) => alert(err));
  
          // * guest user
  
          this.recieverMsg(msgValue, currentUserId, guestUserId, source)
            .then(() => {})
            .catch((err) => alert(err));
        }
      });
    };*/


    async senderMsg (msgValue, currentUserId, uid, img) {
        try {
          await Firebase
            .database()
            .ref('messeges/' + this.state.currentUserId)
            .child(this.state.uid)
            .push({
              messege: {
                sender: this.state.currentUserId,
                reciever: this.state.uid,
                msg: this.state.msgValue,
                img: this.state.img,
              },
            });
        } catch (error) {
          return error;
        }
      };
      
    async  recieverMsg (msgValue, currentUserId, uid, img,) {
        try {
          await Firebase
            .database()
            .ref('messeges/' + this.state.uid)
            .child(this.state.currentUserId)
            .push({
              messege: {
                sender: this.state.currentUserId,
                reciever: this.state.uid,
                msg: this.state.msgValue,
                img: this.state.img,
              },
            });
        } catch (error) {
          return error;
        }
      };

    render() {

        return (
            <SafeAreaView style={{flex : 1} }>
              <KeyboardAwareScrollView>
                        <FlatList
                        inverted
                        data={this.state.messeges}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item }) => (
                            <ChatBox
                            userId={item.sendBy}
                            msg={item.msg}
                            img={item.img}
                            //onImgTap={() => imgTap(item.img)}
                            />
                        )}
                        />
                    </KeyboardAwareScrollView>
                    <View style={styles.sendMessageContainer}>
                        <InputField
                            inputStyle={styles.inputSend}
                            numberOfLines={10}
                            placeholder="Nội dung..."
                            value={this.state.msgValue}
                            onChangeText={(text) => this.setState({msgValue: text})}
                        />
                        <View style={styles.sendBtnContainer}>
                            <MaterialCommunityIcons
                            name="camera"
                            color='black'
                            size={35}
                            //onPress={() => this.handlerImage()}
                            />
                            <MaterialCommunityIcons
                            name="send-circle"
                            color='#59baff'
                            size={35}
                            onPress={() => this.handleSend()}
                            />
                        </View>
                        </View>
            </SafeAreaView>
        )
    }

}

export default ViewMessage
