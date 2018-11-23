import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './Comp9Style';

export class Comp9 extends React.Component {

    constructor(props){
        super(props);

        let bglist = ['green',  'royalblue', 'tomato',  '#f44336', '#e91e63', '#9c27b0', '#2196f3', '#8bc34a', '#607d8b'];
        this.state = {'title' : 'Helloo', 'bglist' : bglist, 'styles':styles, 'bgfy': styles.bgfy};

        this.onClickChangeBackground = this.onClickChangeBackground.bind(this);
    }


    onClickChangeBackground() {
        const newstyles = JSON.parse(JSON.stringify(styles));
        const random = Math.floor(Math.random() * this.state.bglist.length);

        newstyles.bgfy.backgroundColor = this.state.bglist[random];
        const newstate = {'bgfy': newstyles.bgfy};

        this.setState(newstate);
    }


    render(){
        return (
            <View style={[styles.contaienr, this.state.bgfy]}>
                <Text style={styles.textify}>{this.state.title}</Text>
                <Button title='Click Me' color='teal' onPress={this.onClickChangeBackground}></Button>
            </View>
        );
    }
}