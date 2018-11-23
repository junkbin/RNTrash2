import React from 'react';
import {View, Text} from 'react-native';

import {styles6} from './Comp6Style';

export class Comp6 extends React.Component {

    constructor(props){
        super(props);

        this.state = {'title' : 'Helloo Universe!!', 'style6' : styles6};
    }

    componentDidMount() {
        setInterval(this.procesChangeBackground, 2000);
    }

    procesChangeBackground() {
        try{
            this.setState({"style6": {"bgfy": 'tomato'}, "title": "World"});
        }catch(err){
            console.log(err);
        }
    }

    render(){
        return (
            <View style={[styles6.contianer, this.state.style6.bgfy]}>
                <Text style={styles6.textify}>
                    {this.state.title}
                </Text>
            </View>
        );
    }
}