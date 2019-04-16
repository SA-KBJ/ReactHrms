import React, { Component } from 'react';
import { Text, FlatList, View ,StyleSheet} from 'react-native';
import { Card } from 'react-native-elements'
import dimen from '../../../config/dimen';
import colors from '../../../config/colors';
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
            <Card >
                <Text style={styles.headerTextView}>{item.title}</Text>
                <Text style={styles.subHeaderTextView}>{item.value}</Text>
            </Card>
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
const styles = StyleSheet.create({
    headerTextView: {
        marginStart: dimen.marginTiny,
        marginEnd: dimen.marginTiny,
        color:colors.textTitleGray,
        fontSize: dimen.textMedium,

    },
    subHeaderTextView:{
        marginStart: dimen.marginTiny,
        marginEnd: dimen.marginTiny
    },
    divider: {
        borderBottomColor: colors.colorPrimary,
        borderBottomWidth: 0.5,
        marginStart: dimen.marginSmall,
        marginEnd: dimen.marginSmall,
        marginTop:dimen.marginTiny
    },
})
export default Company;