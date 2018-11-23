import React from 'react';
import {View, Text} from 'react-native';

export class Comp2 extends React.Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:'royalblue', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:40, fontWeight:'bold'}}>Navy Blue</Text>
            </View>
        );
    }
}