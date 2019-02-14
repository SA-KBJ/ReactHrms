import React from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, DatePickerAndroid, ToastAndroid } from 'react-native';
import colors from '../../config/colors'
import strings from '../../config/string'
import dimen from '../../config/dimen'
import constants from "../../config/constants";
import images from '../../config/images'
import { CheckBox, Input, Image, Button } from 'react-native-elements'
import CustomDatePicker from "../../customComponent/CustomDatePicker"

export default class NewLeave extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isMultipleLeave: false,
            reason: "",
            Watchers: ['Add Watcher', 'a', 'b', 'c', 'd', 'e'],
            selectedWatcher: strings.promt_watcher_picker,
            selectedStartDate: "",
            selectedEndDate: "",
            assignName: "Ankit Thakkar"
        };
    }


    render() {

        const { isMultipleLeave } = this.state;

        validate = () => {

            let massage = ""
          
            if (this.state.selectedStartDate == "") {
                if (this.state.isMultipleLeave) {
                    massage = strings.error_select_date
                } else {
                    massage = strings.error_select_start_date
                }
            } else if (this.state.selectedEndDate == "" && this.state.isMultipleLeave) {
                massage = strings.error_select_end_date
            } else if (this.state.reason == "") {
                massage = strings.error_empty_reason
            }

            console.log(massage + "" + this.state.reason)

            if (massage != "") {
                ToastAndroid.show(massage, ToastAndroid.SHORT);
                return false
            } else {
                ToastAndroid.show("Success", ToastAndroid.SHORT);
                return true
            }

        }

        sendRequestClick = () => {
            if (validate()) {
                console.log("success")
            } else {
                console.log("fail")
            }
        }
        goBackClick = () => {
            
        }


        const onDateSelect = (date, key) => {
            if (key == constants.startDate) {
                this.setState({ selectedStartDate: date })
            } else {
                this.setState({ selectedEndDate: date })
            }
            console.log("onDateSelect call" + date)
        }

        return (

            <View style={styles.container}>
                <CheckBox
                    title={strings.lable_Multiple_leave}
                    checked={isMultipleLeave}
                    checkedColor={colors.colorPrimary}
                    onPress={() => this.setState({ isMultipleLeave: !isMultipleLeave })}
                />
                <Text style={styles.textTitle}>{this.state.isMultipleLeave ? strings.lable_start_date : strings.lable_date}</Text>
                <TouchableOpacity onPress={() => CustomDatePicker(onDateSelect, constants.startDate) }>
                    <Input
                        inputStyle={styles.input}
                        labelStyle={styles.lableInput}
                        placeholder={this.state.isMultipleLeave ? strings.select_start_date : strings.select_date}
                        editable={false}
                        value={this.state.selectedStartDate}
                        rightIcon={
                            <Image style={styles.icon}
                                source={images.calander} />
                        }
                    />
                </TouchableOpacity>

                {this.state.isMultipleLeave ?
                    <Text style={styles.textTitle}>{strings.lable_end_date}</Text>
                    : null}

                {this.state.isMultipleLeave ?
                    <TouchableOpacity onPress={() => CustomDatePicker(onDateSelect, constants.endDate) }>
                        <Input
                            inputStyle={styles.input}
                            labelStyle={styles.lableInput}
                            placeholder={strings.select_end_date}
                            editable={false}
                            value={this.state.selectedEndDate}
                            rightIcon={
                                <Image style={styles.icon}
                                    source={images.calander} />
                            }
                        />
                    </TouchableOpacity>
                    : null}


                <Text style={styles.textTitle}
                    onChangeText={this.handleChange}
                >{strings.lable_reason}</Text>
                <Input
                    placeholder={strings.place_holder_reason}
                    onChangeText={(value) => this.setState({ reason: value })}
                />

                <View style={styles.assignContainer}>
                    <Text style={styles.textTitle}>{strings.lable_assign_to}</Text>
                    <Text style={styles.textValue}>{this.state.assignName} </Text>
                </View>

                <Text style={styles.textTitle}>{strings.lable_watcher}</Text>

                <Picker
                    selectedValue={this.state.selectedWatcher}
                    onValueChange={(watcher, itemIndex) => (this.setState({ selectedWatcher: watcher }))}
                    style={styles.watcherPicker}
                    mode="dropdown">
                    {
                        this.state.Watchers.map((watcher, index) => {
                            return <Picker.Item color={colors.colorPrimary} key={index} value={watcher} label={watcher} />
                        })
                    }
                </Picker>

                <View style={styles.btnContainer}>
                    <Button
                        buttonStyle={styles.buttonRequest}
                        title={strings.lable_send_request}
                        onPress={() => { sendRequestClick() }}
                    />
                    <Button
                        buttonStyle={styles.buttonGoback}
                        title={strings.lable_do_nothing}
                        onPress={() => { goBackClick() }}
                    />

                </View>


            </View >

        );
    }



}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: colors.white,
        marginTop: dimen.marginBig,
        // padding: dimen.marginMedium,
        // justifyContent: 'center'

    },

    input: {
        width: '100%',
        color: colors.colorPrimary
    },


    textTitle: {
        color: colors.textTitleGray,
        marginTop: dimen.marginMedium,
        marginLeft: dimen.marginSmall,
        fontWeight: 'bold',
        fontSize: dimen.textMedium
    },

    icon: {
        width: 40,
        height: 40
    },
    textValue: {
        marginTop: dimen.marginMedium,
        marginLeft: dimen.marginSmall,
        color: colors.textValueGray,
    },

    assignContainer: {
        flexDirection: 'row',
    },
    watcherPicker: {
        marginLeft: dimen.marginTiny
    },

    btnContainer: {
        marginTop: dimen.marginMedium,
        marginLeft: dimen.marginSmall,
        flexDirection: 'row',
    },
    buttonRequest: {
        backgroundColor: colors.colorPrimary
    },
    buttonGoback: {
        backgroundColor: colors.colorPrimary,
        marginLeft: dimen.marginSmall,
    }

});