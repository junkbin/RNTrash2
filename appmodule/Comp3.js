import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Comp3 extends React.Component {

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.textify}>
                    Stylesheet.
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    'container' : {
        flex:1, 
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'royalblue'
    },

    'textify' : {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }
});

