import React, { Component } from 'react';
import { Text,FlatList,View } from 'react-native';

class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: [
                {
                    id: 1,
                    title: "Joining Date",
                    value: "Dec 01, 2017"
                }, {
                    id: 2,
                    title: "Association Dates",
                    value: "Aug 21, 2017"
                }
            ]
        }
    }
    rowCompanyList = (item, index) => {
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
                data={this.state.companyList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => this.rowCompanyList(item, index)}
            />
        );
    }
}
export default Company;