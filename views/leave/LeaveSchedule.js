import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native';
import colors from '../../config/colors'
import strings from '../../config/string'
import dimen from '../../config/dimen'
import images from '../../config/images'
import { CheckBox, Input, Image, Button, Icon } from 'react-native-elements'
import TitleText from '../../customComponent/TitleText'
import ValueText from '../../customComponent/ValueText'
import BullatedText from '../../customComponent/BullatedText'
import ActionButton from '../../customComponent/ActionButton'
import comman from '../../style/comman'

import Modal from "react-native-modal";
// import imageStyle from '../../style/leaveStyle'


export default class LeaveSchedule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveList: [
                {
                    id: 1,
                    leaveType: "Today",
                    date: "Mar 6,2019",
                    day: "Wednesday",
                    leaveBalance: 3,
                    people: [
                        {
                            id: 1,
                            name: "kinjal",
                            image: "",
                            leaveStatus: "Approve",
                            isHalfLeave: false

                        },
                        {
                            id: 2,
                            name: "Juhi",
                            image: "",
                            leaveStatus: "Pending",
                            isHalfLeave: true
                        },
                        {
                            id: 3,
                            name: "Bansari",
                            image: "",
                            leaveStatus: "Approve",
                            isHalfLeave: false
                        }
                    ]

                },
                {
                    id: 1,
                    leaveType: "Today",
                    date: "Mar 6,2019",
                    day: "Wednesday",
                    leaveBalance: 3,
                    people: [
                        {
                            id: 1,
                            name: "kinjal",
                            image: "",
                            leaveStatus: "Approve",
                            isHalfLeave: false

                        },
                        {
                            id: 2,
                            name: "Juhi",
                            image: "",
                            leaveStatus: "Pending",
                            isHalfLeave: true
                        },
                        {
                            id: 3,
                            name: "Bansari",
                            image: "",
                            leaveStatus: "Approve",
                            isHalfLeave: false
                        }
                    ]

                }
            ]
        }
    }
    imageStyle = (status) => {
        switch (status) {
            case "Approve":
                return styles.peopleImage
            case "Half":
                return styles.halfLeaveImage
            default:
                return styles.approvePendingLeave

        }
    }


    rowPeopleList = (item, index) => {
        return (
            <View >
                <Image
                    style={this.imageStyle("ef")}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />
                <Text style={styles.nameText}>{item.name}</Text>
            </View>
        )
    }
    mainRowItem = (item, index) => {
        return (
            <View style={comman.rowMainContainer}>
                <View style={comman.horizontalView}>
                    <Icon color={colors.status_icon} name="calendar-check" size={20} type="material-community" color={colors.colorPrimary} />
                    <TitleText style={styles.leaveDetailText} >{item.date + " " + item.day + " (" + item.leaveBalance + ") "}</TitleText>
                </View>
                <FlatList
                    data={item.people}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => this.rowPeopleList(item, index)}
                    style={styles.peopleList}
                    horizontal
                />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    data={this.state.leaveList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => this.mainRowItem(item, index)}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: dimen.marginSmall,
        // backgroundColor: colors.colorPrimary,
        flex: 1
    },
    leaveDetailText: {
        fontSize: dimen.textMedium,
        marginLeft: dimen.marginSmall
    },
    peopleList: {
        marginTop: dimen.marginSmall
    },
    peopleContainer: {
        margin: dimen.marginSmall,
        alignItems: 'center'
    },

    nameText: {
        marginTop: dimen.fontSmall,

    },
    peopleImage: {
        width: dimen.imageSizeLarge,
        height: dimen.imageSizeLarge,
        borderRadius: 100,
        borderWidth: 2,

    },
    halfLeaveImage: {
        width: dimen.imageSizeLarge,
        height: dimen.imageSizeLarge,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.reason_icon
    },
    approvePendingLeave: {
        width: dimen.imageSizeLarge,
        height: dimen.imageSizeLarge,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.approved_icon
    },


})