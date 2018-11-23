import React from 'react';
import {View, Text} from 'react-native';
import {comp4Style} from './Comp4Style';

export class Comp4 extends React.Component {

    render(){
        return (
            <View style={[comp4Style.container, comp4Style.bgPrimary]}>
                <Text style={comp4Style.textify}>External Style</Text>
            </View>
        );
    }

}