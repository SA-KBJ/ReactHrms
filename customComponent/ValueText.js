import React from "react";
import { StyleSheet, Text } from "react-native";
import dimens from '../config/dimen'
import colors from '../config/colors'

export default ValueText = props => {
    return (<Text {...props}
        style={[styles.valueText, props.style]}    >
        {props.children}
    </Text>)
}

const styles = StyleSheet.create({
    valueText: {
        fontSize: dimens.textNormal,
        color: colors.textValueGray
    }
});