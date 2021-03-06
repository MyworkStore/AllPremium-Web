import React from 'react'
import {
    StyleSheet,
    View,
  } from 'react-native';


export default class Card extends React.Component {

    render(){
        return (
            <View style={styles.cardContainer}>
                {this.props.children}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    
    cardContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        //borderWidth: 1,
        //borderColor: '#8c8c8c',
        borderRadius: 4,
        elevation: 3,
        marginVertical: 5,
        backgroundColor: '#d9d9d9'
    }

  });