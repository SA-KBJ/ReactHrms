import React from "react";
import { StyleSheet, Text } from "react-native";
import dimens from '../config/dimen'
import colors from '../config/colors'

export default TitleText = props => {
    return (<Text {...props}
        style={[styles.titleText, props.style]}    >
        {props.children}
    </Text>)
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: dimens.textNormal,
        color: colors.textTitleGray,
    }
});