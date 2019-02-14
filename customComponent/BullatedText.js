import React from "react";
import { StyleSheet, Text } from "react-native";
import dimens from '../config/dimen'
import colors from '../config/colors'

export default BullatedText = props => {
    return (
        <Text>
            <Text >{'\u2022' + " "}</Text>
            <Text {...props} style={[styles.valueText, props.style]} >{props.children}</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    valueText: {
        fontSize: dimens.textNormal,
        color: colors.textValueGray
    },
    bullatedSize: {
        fontSize: dimens.textBig,
    }
});