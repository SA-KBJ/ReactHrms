import { StyleSheet } from 'react-native';
import colors from '../config/colors'
import dimen from '../config/dimen';

const baseStyles = StyleSheet.create({
    peopleImage: {
        width: dimen.imageSizeLarge,
        height: dimen.imageSizeLarge,
        borderRadius: 100,
        borderWidth: 2,

    },
    halfLeaveImage: {
        ...peopleImage,
        borderColor: colors.reason_icon
    },
    approvePendingLeave: {
        ...peopleImage,
        borderColor: colors.approved_icon
    },

})

const imageStyle = (status) => {
    switch (status) {
        case "Approve":
            return baseStyles.peopleImage
        case "Half":
            return baseStyles.halfLeaveImage
        default:
            return baseStyles.approvePendingLeave

    }
}


export default imageStyle