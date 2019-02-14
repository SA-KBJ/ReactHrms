import React , {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../config/colors';
import dimen from '../../config/dimen';
import CommonStyle from "../../style/comman";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Tab from '../../config/navigations';


class Profile extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Profile'
      }
    render() {
        return (
            <View style={CommonStyle.container} >
                <View style={styles.detailView}>
                    <Image source={{ uri: "https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={styles.profileImg} />
                </View>
                <View style={styles.tabView}>
                    <Tab />
                </View>
            </View>
        );
        // return <Tab />
    }
}

const styles = StyleSheet.create({
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginTop:30,

        },
    detailView: {
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: 'powderblue',
        flexDirection:'column',
        alignItems: 'center'


    },
    tabView: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'skyblue',

    }
})

export default Profile;