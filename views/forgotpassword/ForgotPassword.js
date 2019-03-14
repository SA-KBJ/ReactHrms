import React, { Component } from "react";
import { Navigation } from "react-native-navigation"
import { View, BackHandler, StyleSheet } from "react-native";
import CommonStyle from "../../style/comman";
import CommonStrings from "../../config/string";
import { Input, Button } from 'react-native-elements'
import dimen from '../../config/dimen'
import colors from "../../config/colors";
import apiconfig from "../../config/Api";
import ProgressDialog from '../../utility/progressdialog';
import validateInput from "../../utility/validation";

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props)
        Navigation.events().bindComponent(this);
        this.state = {
            profile: "",
            isProgress: false,
            controls: {
                email: {
                    value: "",
                    valid: false,
                    validationRules: {
                        isEmail: true
                    },
                    touched: false
                },
            },
        }
    }
    openProgressbar = (val) => {
        this.setState({ isProgress: val })
    }

    validateUserInput = (key, val) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            };
        }
        this.setState(prevState => {

            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: val,
                        valid: validateInput(
                            val,
                            prevState.controls[key].validationRules,
                            connectedValue
                        ),
                        touched: true
                    }
                }
            };
        });
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
        this.setMergeOprions();
    }

    handleBackPress = () => {
        this.setMergeOprions();
        Navigation.pop(this.props.componentId);
        return true;
    }

    render() {
        return (
            this.state.isProgress ?
                <ProgressDialog visible={true} />
                :
                <View style={CommonStyle.container}>
                    <View style={CommonStyle.verticalView}>
                        <ProgressDialog visible={false} />
                        <Input containerStyle={styles.inputContainer} autoCapitalize="none"
                            autoCorrect={false} keyboardType="email-address" touched={this.state.controls.email.touched} inputStyle={styles.input} placeholder="Email" value={this.state.controls.email.value} onChangeText={val => this.validateUserInput("email", val)} />
                        <View style={CommonStyle.horizontalView}>
                            <Button buttonStyle={styles.buttonStyle}
                                disabled={
                                    !this.state.controls.email.valid
                                } title={CommonStrings.action_submit} onPress={this.onSubmitClick} />
                        </View>
                    </View>
                </View>
        );
    }

    setMergeOprions = () => {
        Navigation.mergeOptions('loginstack', {
            topBar: {
                title: {
                    text: "Login"
                },
            }
        })
    }
    onSubmitClick = async () => {
        this.openProgressbar(true);
        await fetch(apiconfig.Base_url + apiconfig.ForgotPasswordApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": this.state.controls.email.value.trim(),
            })
        })
            .then((response) => {
                status = response.status.toString();
                return response.json()
            }
            )
            .then((responseJson) => {
                this.openProgressbar(false);
                this.setState(
                    {
                        isLoading: false,
                    },
                    // In this block you can do something with new state.
                    function () {
                        const json = responseJson
                        if (status === "200") {
                            alert("Password has been sent.Please check your email")
                            this.handleBackPress();
                        }
                    })
            })
            .catch((error) => {
                console.error(error);
                alert("error:  " + error);
            });
    }
}
const styles = StyleSheet.create({

    inputContainer: {
        width: "62%",
        margin: dimen.marginTiny,
        alignItems: 'center',
    },
    buttonStyle: {
        width: '100%',
        alignItems: 'stretch',
        marginTop: dimen.marginSmall,
        marginBottom: dimen.marginSmall,
        backgroundColor: colors.colorPrimary,
    }

})
Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId == 'back') {
        this.handleBackPress
    }
})