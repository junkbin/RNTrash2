import React from 'react';
import {View, Text} from 'react-native';

import {styles6} from './Comp6Style';

export class Comp6 extends React.Component {
    render(){
        return (
            <View style={[styles6.contianer, styles6.bgfy]}>
                <Text style={styles6.textify}>
                    Hello World
                </Text>
            </View>
        );
    }
}