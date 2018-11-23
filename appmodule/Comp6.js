import React from 'react';
import {View, Text} from 'react-native';

import {styles6} from './Comp6Style';

export class Comp6 extends React.Component {

    constructor(props){
        super(props);

        this.state = {'title' : 'Helloo title!!', 'style6' : styles6};
    }

    componentDidMount() {
        setTimeout(()=>{
            this.procesChangeBackground()
        }, 2000);
    }

    procesChangeBackground() {
        try{
            const refStyle = JSON.parse(JSON.stringify(styles6));
            refStyle.bgfy.backgroundColor = 'tomato';
            const newtitle = "World";

            this.setState({"style6": refStyle, "title": newtitle});
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