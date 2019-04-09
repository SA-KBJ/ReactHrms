import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';

class Personal extends Component {
    constructor(props) {
        super(props);
      
      
       

        this.state = {
            personalList: [
                {
                    id: 1,
                    title: "Middle Name",
                    value: "abc"
                }, {
                    id: 2,
                    title: "Personal Email Address",
                    value: "bansari@gmail.com"
                }, {
                    id: 3,
                    title: "Passport No",
                    value: "No"
                }, {
                    id: 4,
                    title: "Passport Expiry",
                    value: "No"
                }
            ]
        }
    }
    rowPersonalList = (item,index) => {
        return (
            <View >
                <Text>{item.title}</Text>
                <Text>{item.value}</Text>
            </View>
        )
    }
    render() {
        return (
            <FlatList
                data={this.state.personalList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => this.rowPersonalList(item, index)}
            />
        );
    }
}
export default Personal;