import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../../config/colors'
import strings from '../../config/string'
import dimen from '../../config/dimen'
import { Image } from 'react-native-elements'

export default class UpComingHoliday extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      holidayList: [
        { "id": 1, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti ", "image": "ic_salogo.png" },
        { "id": 2, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 3, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 4, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 5, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 6, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 7, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 8, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 9, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 10, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 11, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
        { "id": 12, "date": "Mar 21, 2019", "day": "Thursday", "name": "Dhuleti", "image": "ic_salogo.png" },
      ]
    }
  }

  rowItem = (item) => {
    return (
      <View style={styles.rowMainContainer}>
        <Text style={styles.item} >{item.date + " (" + item.day + ")  "}</Text>
        <View style={styles.rowImageContainer}>
          <Image style={styles.holidayImage}
            source={require('../../assets/ic_salogo.png')} />
          <Text style={styles.hoildayText} lineBreakMode='tail'>{item.name}</Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>{strings.lable_upcoming_holiday}</Text>
        <FlatList
          data={this.state.holidayList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => this.rowItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimen.marginSmall,
  },
  screenTitle: {
    color: colors.textTitleGray,
    fontSize: dimen.textLarge,
    marginBottom: dimen.marginSmall
  },
  item: {
    fontSize: dimen.textMedium,
    color: colors.textTitleGray
  },

  rowMainContainer: {
    padding: dimen.marginSmall,
    marginBottom: dimen.marginSmall,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.textValueGray,
    borderRadius: 3,
    elevation: 3
  },
  rowImageContainer: {
    flexDirection: 'row',
    marginTop: dimen.marginSmall,
    paddingRight: dimen.marginSmall,
    alignItems: 'center'
  },
  holidayImage: {
    width: 40,
    height: 40
  },
  hoildayText: {
    flex: 1,
    marginLeft: dimen.marginSmall,
    marginRight: dimen.marginSmall,
    color: colors.textTitleGray,

  }
})