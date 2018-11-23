import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './Comp9Style';

export class Comp9 extends React.Component {

    constructor(props){
        super(props);

        this.state = {'title' : 'Helloo'};
    }

    render(){
        return (
            <View style={[styles.contaienr, styles.bgfy]}>
                <Text style={styles.textify}>{this.state.title}</Text>
            </View>
        );
    }
}