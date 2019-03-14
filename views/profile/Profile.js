import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import dimen from '../../config/dimen';
import string from '../../config/string';
import Icon from "react-native-vector-icons/Ionicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { FloatingAction } from 'react-native-floating-action';
import goToPersonal from '../AppNavigator';
class Profile extends React.Component {

    render() {
        return (
            <View style={styles.container} >



                <View style={styles.profileView}>
                    <Image
                        source={{ uri: "https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }}
                        style={styles.profileImg}
                    />
                </View>
                <Text style={styles.userText}>Bansari Patel(1yr 2m)</Text>
                <Text style={styles.designationText}>Junior Software Engineer</Text>


                <ScrollView contentContainerStyle={flex = 1} style={styles.scrollView}>
                    <View style={flex = 1}>

                        <View style={styles.rowView}>
                            <View style={styles.innerRowView}>
                                <Icon
                                    name="md-mail"
                                    color={colors.yellow}
                                    size={25}
                                />
                                <Text style={styles.textview}>Email:</Text>
                            </View>
                            <Text>abc@gmail.com</Text>
                        </View>

                        <View
                            style={styles.divider}
                        />

                        <View style={styles.rowView}>
                            <View style={styles.innerRowView}>
                                <Icon
                                    name="md-person"
                                    color={colors.colorPrimary}
                                    size={25}
                                />
                                <Text style={styles.textview}>Employee Id:</Text>
                            </View>
                            <Text>SA-0165</Text>
                        </View>

                        <View
                            style={styles.divider}
                        />
                        <View style={styles.rowView}>
                            <View style={styles.innerRowView}>
                                <Icon
                                    name="md-water"
                                    color='red'
                                    size={25}
                                />
                                <Text style={styles.textview}>Blood Group:</Text>
                            </View>
                            <Text>A+</Text>
                        </View>
                        <View
                            style={styles.divider}
                        />
                        <View style={styles.rowView}>
                            <View style={styles.innerRowView}>
                                <IconFontAwesome
                                    name="birthday-cake"
                                    color={colors.yellow}
                                    size={25}
                                />
                                <Text style={styles.textview}>Age:</Text>
                            </View>
                            <Text>22yr</Text>
                        </View>
                        <View
                            style={styles.divider}
                        />
                        <View style={styles.rowView}>
                            <View style={styles.innerRowView}>
                                <Icon
                                    name="md-call"
                                    color={colors.colorPrimary}
                                    size={25}
                                />
                                <Text style={styles.textview}>Contact no:</Text>
                            </View>
                            <Text>88989898989</Text>
                        </View>
                        <View
                            style={styles.divider}
                        />
                        <View style={styles.rowView}>
                            <View style={styles.innerRowView}>
                                <Icon
                                    name="md-home"
                                    color={colors.colorPrimary}
                                    size={25}
                                />
                                <Text style={styles.textview}>Address:</Text>
                            </View>
                            <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                        </View>


                    </View>

                </ScrollView>
            
                <FloatingAction
                    actions={actions}
                    color={colors.colorPrimary}
                    onPressItem={
                        (name) => {
                          console.log(`selected button: ${name}`);
                        }
                    }
                />
            </View>


        );
    }
}
const actions = [{
    text: string.label_personal,
    name: string.label_personal,
    icon: require('./../../assets/user.png'),
    position: 1,
    color:colors.colorPrimary,
  }, {
    text: string.label_company,
    name: string.label_company,
    icon: require('./../../assets/company.png'),
    position: 2,
    color:colors.colorPrimary

  }, {
    text: string.label_exprience,
    name: string.label_exprience,
    icon: require('./../../assets/exprience.png'),
    position: 3,
    color:colors.colorPrimary

  }, {
    text: string.label_other,
    name: string.label_other,
    icon: require('./../../assets/other.png'),
    position: 4,
    color:colors.colorPrimary

  },
  {
    text: string.label_family,
    name: string.label_family,
    icon: require('./../../assets/family.png'),
    position: 5,
    color:colors.colorPrimary

  }];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    scrollView: {
        marginBottom: dimen.marginMedium
    },
    floatingActionButton: {
        color:colors.colorPrimary
    },
    profileView: {
        height: '20%',
        backgroundColor: colors.colorPrimary,
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: dimen.marginLarge
    },
    divider: {
        borderBottomColor: colors.colorPrimary,
        borderBottomWidth: 0.5,
        marginStart: dimen.marginSmall,
        marginEnd: dimen.marginSmall
    },
    textview: {
        marginStart: dimen.marginSmall,
        fontSize: dimen.textNormal
    },
    innerRowView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
        height: 0
    },
    userText: {
        fontSize: dimen.textXlarge,
        marginTop: dimen.marginBig,
        textAlign: 'center',
        width: "100%",
        justifyContent: 'center',

    },
    designationText: {
        fontSize: dimen.textNormal,
        textAlign: 'center',
        width: "100%",
        justifyContent: 'center',
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
        marginTop: dimen.marginBig,


    }
})

export default Profile;