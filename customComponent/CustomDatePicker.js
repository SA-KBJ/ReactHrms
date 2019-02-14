
import { DatePickerAndroid } from "react-native";


export default async function CustomDatePicker(func, key) {
    try {
        const { action, year, month, day } = await DatePickerAndroid.open({
            date: new Date()
        });
        if (action == DatePickerAndroid.dateSetAction) {
            func(day + '/' + month + '/' + year, key);
            console.log(day + '/' + month + '/' + year);
        }
    } catch ({ code, message }) {
        console.warn('Cannot open date picker', message);
    }


}