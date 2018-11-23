import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './Comp8Style';
export class Comp8 extends React.Component{

    bglist = ['green',  'royalblue', 'tomato',  '#f44336', '#e91e63', '#9c27b0', '#2196f3', '#8bc34a', '#607d8b'];

    constructor(props){
        super(props);
        this.state = {'bglist': this.bglist, 'bgfy' : styles.bgfy};
    }

    componentDidMount(){
        setInterval(()=>{this.changeBackground()}, 2000);
    }

    changeBackground() {
        try{
            const refstyles = JSON.parse(JSON.stringify(styles));
            const random = Math.floor(Math.random() * this.bglist.length);
            refstyles.bgfy.backgroundColor = this.bglist[random];
            
            const newRefState = {'bgfy': refstyles.bgfy};
            this.setState(newRefState);
        }catch(err){
            console.log(err);
        }
    }

    render(){
        return (
            <View style={[styles.contaienr, this.state.bgfy]}>
                <Text style={styles.textify}>Helloo {this.state.bgfy.backgroundColor}</Text>
            </View>
        );
    }
}