import React, { Component } from 'react';
import { Text, FlatList, View,StyleSheet } from 'react-native';
import { Card} from 'react-native-elements'
import dimen from '../../../config/dimen';
import colors from '../../../config/colors';
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
                }, {
                    id: 4,
                    title: "Passport Expiry",
                    value: "No"
                }, {
                    id: 4,
                    title: "Passport Expiry",
                    value: "No"
                }, {
                    id: 4,
                    title: "Passport Expiry",
                    value: "No"
                }, {
                    id: 4,
                    title: "Passport Expiry",
                    value: "No"
                }, {
                    id: 4,
                    title: "Passport Expiry",
                    value: "No"
                }, {
                    id: 4,
                    title: "Passport Expiry",
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
            <Card style={styles.cardViewStyle}>
                <Text style={styles.headerTextView}>{item.title}</Text>
                <Text style={styles.subHeaderTextView}>{item.value}</Text>
            </Card>
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
const styles = StyleSheet.create({
    headerTextView: {
        marginStart: dimen.marginTiny,
        marginEnd: dimen.marginTiny,
        color:colors.textTitleGray,
        fontSize: dimen.textMedium,

    },
    cardViewStyle:{
        marginBottom:dimen.paddingTiny
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

export default Personal;