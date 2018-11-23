import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './Comp7Style';
export class Comp7 extends React.Component{

    render(){
        return (
            <View style={[styles.contaienr, styles.bgfy]}>
                <Text style={styles.textify}>Helloo</Text>
            </View>
        );
    }
}