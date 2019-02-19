import Home from '../home/Home'
import Login from '../authentication/Login'
import ForgotPassword from '../forgotpassword/ForgotPassword'
import Splash from '../splash/Splash'
import Profile from '../profile/Profile'
import MyLeave from '../leave/MyLeave'
import LeaveDetails from '../leave/LeaveDetails'
import NewLeave from '../leave/NewLeave'
import Policy from '../policy/Policy'
import Faq from '../faq/Faq'
import DrawerContainer from '../drawer/DrawerContainer'

import { Navigation } from 'react-native-navigation';

function registerScreens(){
    Navigation.registerComponent("hrms_splash",()=>Splash)
    Navigation.registerComponent("hrms_home",()=>Home)
    Navigation.registerComponent("hrms_login",()=>Login)
    Navigation.registerComponent("hrms_forgotpassword",()=>ForgotPassword)
    Navigation.registerComponent("hrms_profile",()=>Profile)
    Navigation.registerComponent("hrms_myLeave",()=>MyLeave)
    Navigation.registerComponent("hrms_leavedetails",()=>LeaveDetails)
    Navigation.registerComponent("hrms_newleave",()=>NewLeave)
    Navigation.registerComponent("hrms_policy",()=>Policy)
    Navigation.registerComponent("hrms_faq",()=>Faq)
    Navigation.registerComponent("hrms_drawercontainer",()=>DrawerContainer)

}
module.exports = {
    registerScreens
};
  