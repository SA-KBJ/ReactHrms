import React from 'react';
import { StyleSheet, ActivityIndicator,Text, View, FlatList } from 'react-native';
import colors from '../../config/colors'
import strings from '../../config/string'
import dimen from '../../config/dimen'
import { Image, ListItem ,List} from 'react-native-elements'
import apiManager from '../../services/apimanager'

export default class UpComingHoliday extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      holidayList: []
      }
  }

  async componentDidMount(){
    await apiManager.getHolidayList().then((res)=>{
      if (res.status.toString() === "200") {
        this.setState({holidayList:res.holidays,loading : false})
        alert(JSON.stringify(res.holidays))
      }else{
        alert("error:  " + res.message);
      }
    })
  }
  
  rowItem = (item) => {
      return (
        <View style={styles.rowMainContainer}>
          <Text style={styles.item} >{item.date + " (" + item.day + ")  "}</Text>
          <View style={styles.rowImageContainer}>
          <Image source={{uri: item.image}} style={styles.holidayImage} />
          <Text style={styles.hoildayText} lineBreakMode='tail'>{item.festivalname}</Text>
          </View>
        </View>
      )
    }

  render() {
     if(!this.state.loading){
       return (
        <View style={styles.container}>
          <Text style={styles.screenTitle}>{strings.lable_upcoming_holiday}</Text>
          <FlatList
            data={this.state.holidayList}
            keyExtractor={item => item._id.toString()}
            renderItem={({ item }) => this.rowItem(item)}
          />
        </View>
      );
      }else{
      return  <ActivityIndicator/>
      }
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

