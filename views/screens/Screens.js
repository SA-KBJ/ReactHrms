import Home from '../home/Home'
import Login from '../authentication/Login'
import ForgotPassword from '../forgotpassword/ForgotPassword'
import Splash from '../splash/Splash'
import Profile from '../profile/Profile'
import MyLeave from '../leave/MyLeave'
import LeaveDetails from '../leave/LeaveDetails'
import NewLeave from '../leave/NewLeave'
import LeaveSchedule from '../leave/LeaveSchedule'
import Policy from '../policy/Policy'
import Faq from '../faq/Faq'
import DrawerContainer from '../drawer/DrawerContainer'
import SignUp from '../signup/SignUp'
import strings from '../../config/string'
import Holidays from '../leave/UpcomingHoliday'
import { Navigation } from 'react-native-navigation';
import Personal from '../profile/personal/Personal';
import Comapany from '../profile/company/Company';
import Experience from '../profile/experience/Experience';
import Other from '../profile/other/Other';
import Family from '../profile/family/Family';



function registerScreens() {
    Navigation.registerComponent(strings.screen_splash, () => Splash)
    Navigation.registerComponent(strings.screen_home, () => Home)
    Navigation.registerComponent(strings.screen_login, () => Login)
    Navigation.registerComponent(strings.screen_forgotpassword, () => ForgotPassword)
    Navigation.registerComponent(strings.screen_profile, () => Profile)
    Navigation.registerComponent(strings.screen_myleave, () => MyLeave)
    Navigation.registerComponent(strings.screen_leave_detail, () => LeaveDetails)
    Navigation.registerComponent(strings.screen_newleave, () => NewLeave)
    Navigation.registerComponent(strings.action_leave_schedule, () => LeaveSchedule)
    Navigation.registerComponent(strings.screen_policy, () => Policy)
    Navigation.registerComponent(strings.screen_faq, () => Faq)
    Navigation.registerComponent(strings.screen_drawer_container, () => DrawerContainer)
    Navigation.registerComponent(strings.screen_signup, () => SignUp)
    Navigation.registerComponent(strings.screen_holiday,()=>Holidays)
    Navigation.registerComponent(strings.screen_personal,()=>Personal)
    Navigation.registerComponent(strings.screen_company,()=>Comapany)
    Navigation.registerComponent(strings.screen_exprerience,()=>Experience)
    Navigation.registerComponent(strings.screen_other,()=>Other)
    Navigation.registerComponent(strings.screen_family,()=>Family)




}
module.exports = {
    registerScreens
};
