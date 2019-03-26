import React, { Component } from "react";
import { View,StyleSheet } from "react-native";
import CommonStyle from "../../style/comman";
import CommonStrings from "../../config/string";
import TextView from "../../customComponent/TitleText"
import dimen from '../../config/dimen';
import colors from '../../config/colors';

export default class Faq extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: ""
    }
  }

  showSlidePanel=(answer)=> {
    this.setState({ answer })
  }

  render() {

    return (
      <View style={styles.container} >
        <View style={CommonStyle.verticalView}>
         <View style={CommonStyle.verticalView}>
          <View style={CommonStyle.horizontalView}>
           <TextView style={styles.titleText} 
            onPress={() => this.showSlidePanel(CommonStrings.faq_answer1)}  >{CommonStrings.faq_question1}</TextView>
          </View>
           <TextView style={styles.answerText}>{CommonStrings.faq_answer1}</TextView>
         </View>   

         <View View style={CommonStyle.verticalView}>
         <View style={CommonStyle.horizontalView}>
           <TextView style={styles.titleText} onPress={() => this.showSlidePanel(CommonStrings.faq_answer2)}  >{CommonStrings.faq_question2}</TextView>
         </View>
           <TextView style={styles.answerText}>{CommonStrings.faq_answer2}</TextView>
         </View>
        </View>

       </View>
    );
  }

}
const styles = StyleSheet.create({
  titleText: {
    backgroundColor: colors.colorPrimary,
    width: '100%',
    fontSize: dimen.fontLarge,
    color: colors.white,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingTop:5,
    paddingBottom:5,
    paddingStart:15,
    paddingEnd:15,   
    marginTop:5,
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: dimen.fontNormal,
    color: colors.night,
    paddingTop:5,
    paddingBottom:5,
    paddingStart:15,
    paddingEnd:15,

    justifyContent:'flex-start',
    alignItems:'flex-start',
    flexDirection: 'column'

  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})