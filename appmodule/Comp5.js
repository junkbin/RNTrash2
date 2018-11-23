import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Comp5 extends React.Component {

    sytles = StyleSheet.create({
        container: {
            flex:1,
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor:'gold'
        },  

        textify: {
            fontSize: 50,
            fontWeight:'bold',
            color:'black',
            fontFamily:'cursive'
        }
    });

    render() {
        return (
            <View style={this.sytles.container}>
                <Text style={this.sytles.textify}>INLINE</Text>
            </View>
        );
    }
}