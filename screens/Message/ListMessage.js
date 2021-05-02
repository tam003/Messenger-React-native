import {  Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
//import { connect } from 'react-redux';
//import styles from '../../Style/Styles';
import Firebase from '../../Firebase/Firebase'

class ListMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers : []
        }
    }
    
    async componentDidMount(){
        try {
            await Firebase.database().ref('users')
                .on('value', (snap) =>{
                    const uuid = Firebase.auth().currentUser.uid;
                    let users = [];
                    snap.forEach((child) => {
                        if (child.val().uuid === uuid) {

                        }
                        else {
                            users.push({
                                userName: child.val().name,
                                uuid: child.val().uuid
                            })
                        }
                    });
                    this.setState({allUsers: users})
                })
        } catch (error) {
            alert(error)
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                    <FlatList
                        alwaysBounceVertical={false}
                        data={this.state.allUsers}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ padding: 10, flexDirection: 'row', backgroundColor: index%2 == 0 ? '#f5eac4': '#fce79f'}} onPress={ () =>this.props.navigation.navigate('View', { name : item.userName, uid : item.uuid, avatar : '', currentUserId : Firebase.auth().currentUser.uid})}>
                                <View style={{width: '12%', height: 40 ,alignItems: 'center', justifyContent: 'center', borderRadius:50, borderWidth: 0.25}}>
                                    
                                </View>
                                <View style={{ width: '88%', alignItems: 'flex-start', justifyContent: 'center', marginLeft:10}}>
                                    <Text>{item.userName}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        />
            </View>
        )
    }

}

export default ListMessage
