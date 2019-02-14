import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import dimens from '../config/dimen'
import colors from '../config/colors'

export default ActionButton = props => {
    return (<Button
        {...props}
        buttonStyle={[styles.button, props.buttonStyle]}
        title={props.children} />

    )
}

const styles = StyleSheet.create({
    button: {
        // fontSize: dimens.textMedium,
        color: colors.textTitleGray,
        backgroundColor: colors.colorPrimary,
        // paddingLeft: 50,
        // paddingRight: dimens.paddingSmall
    }
});