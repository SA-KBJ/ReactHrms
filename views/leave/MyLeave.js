import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList
} from "react-native";

import colors from "../../config/colors";
import strings from "../../config/string";
import constants from "../../config/constants";
import dimen from "../../config/dimen";
import images from "../../config/images";
import { CheckBox, Input, SearchBar, Button } from "react-native-elements";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconOctions from "react-native-vector-icons/Octicons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import IconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";

import Modal from "react-native-modal";
import CustomDatePicker from "../../customComponent/CustomDatePicker"
import comman from '../../style/comman'

export default class MyLeave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leaveBalance: 0,
            searchText: '',
            isFilterVisible: false,
            selectedStartDate: "",
            selectedEndDate: "",
            filterAll: false,
            filterApprovalPending: false,
            filterApproved: false,
            filterCancelled: false,
            leaveList: [
                {
                    id: 1,
                    date: "14-2-2019",
                    leaveCount: 3,
                    day: "Thursday",
                    reason: "Would like to attain marriage funation",
                    status: "Approved",
                    assign: "Ankit Thakkar"
                },
                {
                    id: 2,
                    date: "14-2-2019",
                    leaveCount: 3,
                    day: "Thursday",
                    reason: "Would like to attain marriage funation",
                    status: "Approved",
                    assign: "Ankit Thakkar"
                },
                {
                    id: 3,
                    date: "14-2-2019",
                    leaveCount: 3,
                    day: "Thursday",
                    reason: "Would like to attain marriage funation",
                    status: "Approved",
                    assign: "Ankit Thakkar"
                },
                {
                    id: 4,
                    date: "14-2-2019",
                    leaveCount: 3,
                    day: "Thursday",
                    reason: "Would like to attain marriage funation",
                    status: "Approved",
                    assign: "Ankit Thakkar"
                },
                {
                    id: 5,
                    date: "14-2-2019",
                    leaveCount: 3,
                    day: "Thursday",
                    reason: "Would like to attain marriage funation",
                    status: "Approved",
                    assign: "Ankit Thakkar"
                }
            ]
        };
    }


    leaveItemSelect = (item, index) => {
        console.log("item click ${item} " + index + "" + item)
    }

    rowItem = (item, index) => {
        return (
            <TouchableWithoutFeedback onPress={() => this.leaveItemSelect(item, index)}>
                <View style={comman.rowMainContainer}>
                    <View style={styles.innerRowContainer}>
                        <IconFontAwesome color={colors.date_icon} name="calendar" size={20} />
                        <Text style={styles.rowText}>{item.date}</Text>
                        <Text style={styles.leaveBalanceText}>
                            {" (" + item.leaveCount + ") "}{" "}
                        </Text>
                    </View>
                    <View style={styles.middleRowContainer}>
                        <IconOctions color={colors.reason_icon} name="info" size={25} />
                        <Text style={styles.rowText}>{item.reason}</Text>
                    </View>
                    <View style={styles.middleRowContainer}>
                        <IconMaterialCommunity color={colors.status_icon} name="calendar-check" size={25} />
                        <Text style={styles.rowText}>{item.status}</Text>
                    </View>
                    <View style={styles.middleRowContainer}>
                        <IconMaterial color={colors.approved_icon} name="person-outline" size={25} />
                        <Text style={styles.rowText}>{item.assign}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    filterLayout = () => {
        resetFilter = () => {
            console.log("reset call")
            this.setState({ selectedStartDate: "" })
            this.setState({ selectedEndDate: "" })
            this.setState({ filterAll: false })
            this.setState({ filterApprovalPending: false })
            this.setState({ filterApproved: false })
            this.setState({ filterCancelled: false })
        }
        searchFilter = () => {
            console.log("search call")
            this.setState({ isFilterVisible: !this.state.isFilterVisible })
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
            <Modal isVisible={this.state.isFilterVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.modalRowContent}>
                        <Text style={styles.modalHeaderTitle}>{strings.lable_filter}</Text>
                        <IconAntDesign color={colors.black} name="close" size={30} onPress={() => this.setState({ isFilterVisible: !this.state.isFilterVisible })} />
                    </View>
                    <View style={styles.modelColumnContainer}>

                        <Text style={styles.modalDateTitle}>{strings.lable_start_date}</Text>
                        <TouchableOpacity onPress={() => { CustomDatePicker(onDateSelect, constants.startDate) }}>
                            <Input
                                inputStyle={styles.modelDataInput}
                                placeholder={strings.select_date}
                                editable={false}
                                value={this.state.selectedStartDate}
                                rightIcon={
                                    <IconFontAwesome color={colors.date_icon} name="calendar" size={20} />
                                }
                            />
                        </TouchableOpacity>

                        <Text style={styles.modalDateTitle}>{strings.lable_end_date}</Text>
                        <TouchableOpacity onPress={() => CustomDatePicker(onDateSelect, constants.endDate)}>
                            <Input
                                inputStyle={styles.modelDataInput}
                                placeholder={strings.select_end_date}
                                editable={false}
                                value={this.state.selectedEndDate}
                                rightIcon={
                                    <IconFontAwesome color={colors.date_icon} name="calendar" size={20} />
                                }
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modelColumnContainer}>
                        <Text style={styles.modalDateTitle}>{strings.lable_status}</Text>
                        <CheckBox
                            title={strings.lable_filter_all}
                            checked={this.state.filterAll}
                            checkedColor={colors.colorPrimary}
                            onPress={() => this.setState({ filterAll: !this.state.filterAll })}
                        />
                        <CheckBox
                            title={strings.lable_filter_approval_pending}
                            checked={this.state.filterApprovalPending}
                            checkedColor={colors.colorPrimary}
                            onPress={() => this.setState({ filterApprovalPending: !this.state.filterApprovalPending })}
                        />
                        <CheckBox
                            title={strings.lable_filter_approve}
                            checked={this.state.filterApproved}
                            checkedColor={colors.colorPrimary}
                            onPress={() => this.setState({ filterApproved: !this.state.filterApproved })}
                        />
                        <CheckBox
                            title={strings.lable_filter_cancelled}
                            checked={this.state.filterCancelled}
                            checkedColor={colors.colorPrimary}
                            onPress={() => this.setState({ filterCancelled: !this.state.filterCancelled })}
                        />
                    </View>
                    <View style={styles.filterModalButtonCon}>
                        <Button
                            buttonStyle={styles.buttonSearch}
                            title={strings.lable_search}
                            onPress={() => { searchFilter() }}
                        />
                        <Button
                            buttonStyle={styles.buttonReset}
                            title={strings.lable_reset}
                            onPress={() => { resetFilter() }}
                        />

                    </View>
                </View>
            </Modal>
        )
    }

    searchSubmit =()=>{
        console.log("submit")
    }
    render() {
        return (

            <View style={styles.mainContainer}>
                <View style={styles.leaveContainer}>
                    <Text style={styles.leaveText}>
                        {strings.lable_leave + "" + this.state.leaveBalance}
                    </Text>

                    <SearchBar
                        placeholder="Globle Search .."
                        onChangeText={(value) => this.setState({ searchText: value })}
                        value={this.state.searchText}
                        containerStyle={styles.searchBar}
                        placeholderTextColor={colors.textValueGray}
                        onSubmitEditing={this.searchSubmit}
                        platform='android'
                    />
                    <IconAntDesign color={colors.black} name="filter" size={30} onPress={() => this.setState({ isFilterVisible: !this.state.isFilterVisible })} />
        
                </View>
                {this.filterLayout()}
                <FlatList
                    data={this.state.leaveList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => this.rowItem(item, index)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: dimen.marginSmall,
        // backgroundColor: colors.colorPrimary,
        flex: 1
    },
    leaveText: {
        fontWeight: "bold",
        fontSize: dimen.textLarge,
        marginTop: dimen.marginSmall,
        marginBottom: dimen.marginSmall,
        color: colors.textTitleGray
    },
    leaveContainer: {
        marginBottom: dimen.marginSmall,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBar: {
        flex: 1,
        marginLeft: dimen.marginSmall,
        marginRight: dimen.marginSmall,
        backgroundColor: colors.white,
        backgroundColor: colors.white,
        elevation: 1,
        borderRadius: 5

        // borderBottomColor:colors.textValueGray,
        // borderBottomWidth:1
        // borderColor:colors.textValueGray,
        // borderWidth:1,
        // borderRadius:3,
        // elevation:5
    },
    buttonShowFilter: {
        backgroundColor: colors.colorPrimary
    },
    // rowMainContainer: {
    //     padding: dimen.marginSmall,
    //     marginBottom: dimen.marginSmall,
    //     backgroundColor: colors.white,
    //     borderWidth: 1,
    //     borderColor: colors.textValueGray,
    //     borderRadius: 4,
    //     elevation: 3
    // },
    innerRowContainer: {
        flexDirection: "row"
    },
    middleRowContainer: {
        flexDirection: "row",
        marginTop: dimen.marginSmall,
        paddingRight: dimen.marginLarge,
        alignItems: "center"
    },
    rowText: {
        marginLeft: dimen.marginSmall,
        color: colors.textValueGray,
        alignItems: 'flex-start'
    },
    leaveBalanceText: {
        color: colors.textTitleGray,
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    modalRowContent: {
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
    modelDataInput: {
        color: colors.colorPrimary,
        flex: 1,
        fontSize: dimen.textMedium
        // marginBottom: dimen.marginSmall,
        // marginTop: dimen.marginSmall,
    },
    modelIconData: {
        width: 25,
        height: 25,

    },
    modelColumnContainer: {
        width: "100%",
    },

    modalDateTitle: {
        color: colors.textTitleGray,
        marginTop: dimen.marginMedium,
        marginLeft: dimen.marginSmall,
        // fontWeight: 'bold',
        fontSize: dimen.textMedium
    },
    buttonSearch: {
        backgroundColor: colors.colorPrimary,
        paddingRight: dimen.paddingMedium,
        paddingLeft: dimen.paddingMedium,
    },
    buttonReset: {
        backgroundColor: colors.colorPrimary,
        marginLeft: dimen.marginSmall,
        paddingRight: dimen.paddingMedium,
        paddingLeft: dimen.paddingMedium,
    },

    filterModalButtonCon: {
        flexDirection: "row",
        marginTop: dimen.marginMedium,
        marginLeft: dimen.marginMedium,
        marginRight: dimen.marginMedium,
    }


});
