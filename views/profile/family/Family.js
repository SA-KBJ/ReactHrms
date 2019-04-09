import React,{Component} from 'react';
import { Text ,FlatList,View} from 'react-native';

class Family extends Component {
    constructor(props) {
        super(props);
        this.state = {
            familyList: [
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
    rowFamilyList = (item, index) => {
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
                data={this.state.familyList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => this.rowFamilyList(item, index)}
            />
        );
    }
}
export default Family;