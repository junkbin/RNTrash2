import React from 'react';
import {View, Text} from 'react-native';
import {bluebird as BPromise} from 'bluebird';

import {styles} from './Comp8Style';
export class Comp8 extends React.Component{

    bglist = ['green',  'royalblue', 'tomato',  '#f44336', '#e91e63', '#9c27b0', '#2196f3', '#8bc34a', '#607d8b'];

    constructor(props){
        super(props);
        this.state = {'bglist': this.bglist, 'bgfy' : styles.bgfy, 'title': 'Hello World', 'display': ''};
    }

    componentDidMount(){
        setTimeout(()=>{this.changeBackground()}, 500);
    }

    changeBackground() {
        try{
            const refstyles = JSON.parse(JSON.stringify(styles));
            const random = Math.floor(Math.random() * this.bglist.length);
            let colordata = this.bglist[random];
            refstyles.bgfy.backgroundColor = colordata;
            
            const newRefState = {'bgfy': refstyles.bgfy};
            this.setState(newRefState);

            let taskList = [];
            for(let i=0; i<colordata.length; i++){
                let refdata = colordata.substring(0, i+1);
                taskList.push(refdata);
            }

            BPromise.reduce(taskList, (total, task)=>{
                return this.changeContent(task).then((data)=>{
                    return total + 1;
                })
            }).then(()=>{

                setTimeout(()=>{
                    this.state.display = "";
                    this.changeBackground();
                }, 500);
                
            });
        }catch(err){
            console.log(err);
        }
    }

     changeContent(data) {
        let sthis = this; 
        return new Promise((resolve, reject)=>{
            try{
                setTimeout(()=>{
                    console.log(data);
                    sthis.setState({display : data});

                    resolve(data);
                }, 250);
            }catch(err){
                console.log(err);
                reject(err);
            }
        });
    }

    render(){
        return (
            <View style={[styles.contaienr, this.state.bgfy]}>
                <Text style={styles.textify}>{this.state.display}</Text>
            </View>
        );
    }
}