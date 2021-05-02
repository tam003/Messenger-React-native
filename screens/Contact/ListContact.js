import {  Text, View, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';
import React, { useLayoutEffect } from 'react';
//import { connect } from 'react-redux';
import styles from '../../Style/Styles';

class ListContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           id: '',
           name: '',
           avatar: ''
        }
      }


    render() {
       
        return (
            <View style={styles.container}>
                    <Text>Danh sách bạn bè</Text>
                   
                    <TouchableOpacity
                        style={styles.buttonAddContact}
                        onPress={ () =>{  this.props.navigation.navigate('Add')}}>
                            <Text  style={styles.buttonAddContactText}>Thêm bạn bè</Text>
                        </TouchableOpacity>
            </View>
        )
    }

}

export default ListContact

