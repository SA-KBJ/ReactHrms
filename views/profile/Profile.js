import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../config/colors';
import dimen from '../../config/dimen';
import CommonStyle from "../../style/comman";
import CircularActionButton from '../../customComponent/CircularActionButton';
import ic_user from '../../assets/ic_user.svg'

class Profile extends React.Component {

    render() {
        return (
            <View style={styles.container} >
                {/* <CircularActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => { console.log("hi") }}
                /> */}


                <View style={styles.profileView}>
                    <Image
                        source={{ uri: "https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }}
                        style={styles.profileImg}
                    />
                    <Text style={styles.userText}>Bansari Patel(1yr 2m)</Text>
                    <Text style={styles.designationText}>Junior Software Engineer</Text>
                    <Text style={styles.userNoText}>SA-0165</Text>
                    <Text style={styles.bloodGroupText}>A+</Text>
                </View>


                <View style={styles.detailView}>
                    <View style={styles.rowView}>
                        <Text>22Yr</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text>999999999</Text>
                        <Text>999999999</Text>
                    </View>

                    <View style={styles.rowView}>
                        <Text>A-28, Umiya Vijay Society, Opp. Shivranjani BRTS Bus Stand, Shivranjani, Ahmedabad - 380015</Text>
                    </View>
                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    profileView: {
        height: '50%',
        backgroundColor: colors.colorPrimary,
        alignItems: 'center',

    },
    detailView: {
        height: '50%',
    },
    rowView: {
        flexDirection: 'row',
        backgroundColor: colors.blueShade1,

    },
    userText: {
        fontSize: dimen.textXlarge,
        color: colors.white,
    },
    designationText: {
        fontSize: dimen.textSmall,
        color: colors.white,
    },
    userNoText: {
        fontSize: dimen.textSmall,
        color: colors.white,
    },
    bloodGroupText: {
        fontSize: dimen.textSmall,
        color: colors.white,
    },

    profileImg: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: 30,


    },

    // tabView: {
    //     flex: 1,
    //     alignSelf: 'stretch',
    //     backgroundColor: 'skyblue',

    // }
})

export default Profile;