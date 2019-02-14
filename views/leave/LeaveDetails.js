import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../../config/colors'
import strings from '../../config/string'
import dimen from '../../config/dimen'
import images from '../../config/images'
import { CheckBox, Input, Image, Button } from 'react-native-elements'
import TitleText from '../../customComponent/TitleText'
import ValueText from '../../customComponent/ValueText'
import BullatedText from '../../customComponent/BullatedText'
import ActionButton from '../../customComponent/ActionButton'
import comman from '../../style/comman'
import IconOcticons from "react-native-vector-icons/Octicons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import Modal from "react-native-modal";

export default class LeaveDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            leaveDetails: {
                isMultipleLeave: true,
                isCommentModalVisible: false,
                date: { startDate: "20/1/2019", endDate: "25/1/2019" },
                commentText: "",
                reason: "Would like to attain marriage of best friend.",
                assignTo: "Ankit Thakkar",
                commentList: [
                    { "id": 1, "comment": "Kinjal Dhamat Added leave", "time": "2 week Ago", "startData": "20/1/2019", "endData": "25/1/2019", "reason": "Would like to attain marriage of best friend." },
                    { "id": 2, "comment": "Ankit Thakkar has approve leave(s)", "time": "2 week Ago", "startData": "26/1/2019", "endData": "26/1/2019", "reason": "" },
                    { "id": 3, "comment": "Ankit Thakkar has approve leave(s)", "time": "2 week Ago", "startData": "26/1/2019", "endData": "26/1/2019", "reason": "" },
                    { "id": 4, "comment": "Ankit Thakkar has approve leave(s)", "time": "2 week Ago", "startData": "26/1/2019", "endData": "26/1/2019", "reason": "" },
                ],
            }
        }
    }

    commentLayout = (item) => {
        console.log("item " + item.comment)
        return (
            <View style={flexDirection = 'column'}>
                <View style={styles.commentRowHeader}>
                    <TitleText >{item.comment}</TitleText>
                    <TitleText >{item.time}</TitleText>
                </View>

                <View style={styles.commentDetailContainer}>

                    <BullatedText>
                        <Text style={{ fontWeight: "bold" }}>{strings.lable_start_date}</Text>{item.startData}
                    </BullatedText>

                    {item.endData != "" ?
                        <View style={styles.commentContent}>
                            <BullatedText >
                                <Text style={{ fontWeight: "bold" }}>{strings.lable_end_date + " "}</Text>{item.endData}
                            </BullatedText>
                        </View>
                        : null}

                    {item.reason != "" ?
                        <View style={styles.commentContent}>
                            <BullatedText >
                                <Text style={{ fontWeight: "bold" }}>{strings.lable_reason + " "}</Text>{item.reason}
                            </BullatedText>
                        </View>
                        : null}

                </View>
            </View>
        )
    }
    modifyLeave = () => { console.log("Modify Leave") }
    doNothing = () => { console.log("doNothing click") }
    changeCommentModalStatus = () => {
        this.setState({ isCommentModalVisible: !this.state.isCommentModalVisible })
    }
    addCommentLayout = () => {
        return (
            <Modal isVisible={this.state.isCommentModalVisible}
                onSwipe={() => this.changeCommentModalStatus()}
                onSwipeThreshold={200}
                swipeDirection='down'
                style={{
                    justifyContent: "flex-end",
                    margin: 0,
                }}
                onBackButtonPress={() => this.changeCommentModalStatus()}>

                <View style={[comman.modalContent, { borderRadius: 0 }]}>
                    <Input
                        placeholder={strings.place_holder_enter_comment}
                        onChangeText={(value) => this.setState({ commentText: value })}
                        autoFocus={true}
                        rightIcon={
                            <IconMaterialIcons color={colors.colorPrimary} name="send" size={25} onPress={() => { this.changeCommentModalStatus() }} />
                        }
                    />
                </View>

            </Modal>
        )
    }
    render() {
        const leaveDetail = this.state.leaveDetails
        return (
            <View style={styles.container}>
                <View style={styles.rowContent}>
                    <View>
                        <TitleText>Multiple Days Leaves?</TitleText>
                        <ValueText>{leaveDetail.isMultipleLeave ? "Yes" : "No"}</ValueText>
                    </View>
                    <Text style={styles.leaveDetails}>Leave Details</Text>
                </View>


                <TitleText style={styles.titleText}>Date:</TitleText>
                <ValueText>{
                    leaveDetail.isMultipleLeave ? ("From " + leaveDetail.date.startDate + " To " + leaveDetail.date.endDate) : leaveDetail.date.startDate}
                </ValueText>

                <TitleText style={styles.titleText}>Reason:</TitleText>
                <ValueText>{leaveDetail.reason}</ValueText>

                <TitleText style={styles.titleText}>Assign To:</TitleText>
                <ValueText>{leaveDetail.assignTo}</ValueText>

                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={comman.commanButton}
                        title={strings.lable_modify}
                        onPress={() => { this.modifyLeave() }}
                    />
                    <Button
                        buttonStyle={styles.buttonDoNothing}
                        title={strings.lable_do_nothing}
                        onPress={() => { this.doNothing() }}
                    />
                </View>

                <View style={styles.commentContainer}>
                    <View style={styles.commentHeader}>
                        <TitleText >Leave Conversions</TitleText>
                        <IconOcticons color={colors.colorPrimary} name="comment" size={25} onPress={() => { this.changeCommentModalStatus() }} />
                    </View>
                    <FlatList
                        data={leaveDetail.commentList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => this.commentLayout(item)}
                    />
                </View>
                {this.addCommentLayout()}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: dimen.paddingMedium
    },
    titleText: {
        marginTop: dimen.marginSmall,
    },
    buttonContainer: {
        flexDirection: 'row',
        // width: "%100",
        justifyContent:'flex-end',
        marginTop: dimen.marginMedium,
        // width: "%100"
    },
    buttonDoNothing: {
        ...comman.commanButton,
        marginLeft: dimen.marginMedium
    },
    commentContainer: {
        ...comman.borderContainer,
        marginTop: dimen.marginMedium,
        padding: dimen.paddingSmall,
        flex: 1,

    },
    commentHeader: {
        // marginTop: dimen.marginSmall,
        marginBottom: dimen.marginSmall,
        paddingRight: dimen.paddingSmall,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    commentRowHeader: {
        flexDirection: 'row',
        backgroundColor: colors.blueShade1,
        marginTop: dimen.marginSmall,
        padding: dimen.paddingSmall,
        borderLeftWidth: 2,
        borderLeftColor: colors.blueShade2,
        justifyContent: 'space-between'
    },
    commentDetailContainer: {
        padding: dimen.marginSmall,
        marginLeft: dimen.marginXlarge,
    },
    commentContent: {
        marginTop: dimen.marginSmall,
    },
    rowContent: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        marginBottom: dimen.paddingMedium
    },
    modalHeaderTitle: {
        color: colors.black,
        fontSize: dimen.fontLarge
    },
    leaveDetails: {
        color: colors.colorPrimary,
        // borderColor:colors.borderColor,
        borderRadius: 1,
        elevation:1,
        fontWeight:'bold',
        padding: dimen.paddingTiny
    }

})