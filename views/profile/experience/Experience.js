import React, { Component } from 'react';
import { Text, FlatList} from 'react-native';
import { Card } from 'react-native-elements'
import comman from '../../../style/comman'
class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experienceList: [
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
    rowExperienceListist = (item, index) => {
        return (
            <Card containerStyle={comman.cardView}>
                <Text style={comman.headerTextView}>{item.title}</Text>
                <Text style={comman.subHeaderTextView}>{item.value}</Text>
            </Card >
        )
    }
    render() {
        return (
            <FlatList
                data={this.state.experienceList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => this.rowExperienceListist(item, index)}
            />
        );
    }
}

export default Experience;