import { StyleSheet } from 'react-native';
import AppColors from '../../styles/AppColors';
import { height, width } from 'react-native-dimension';
import { FontFamily } from '../../utils/FontFamily';

const styles = StyleSheet.create({
    text: {
        fontSize: width(4.5),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
    },
    header: {
        width: width(100),
        paddingHorizontal: width(5),
        marginTop: height(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row: { flexDirection: 'row', alignItems: 'center' },
    row2: { flexDirection: 'row', alignItems: 'center', marginTop: height(3), alignSelf: 'center' },
    icon1: {
        width: width(4),
        height: width(4),
        tintColor: AppColors.blue3,
        marginLeft: width(2)
    },
    icon: {
        width: width(4),
        height: width(4),
        tintColor: AppColors.blue3,
    },
    center: { alignSelf: 'center', marginTop: height(2) },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginTop: height(1)
    },
    logo: {
        width: width(10),
        height: width(10),
        borderRadius: width(5),
    },
    logo1: {
        width: width(7),
        height: width(7),
        borderRadius: width(3.5),
    },
    text1: {
        fontSize: width(4),
        color: AppColors.black,
        fontFamily: "black-sans-condensed-bold",
        marginLeft: '4%',
        width: width(65),
    },
    text3: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
    },
    heading: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
        marginTop: height(2),
        marginLeft: width(5),
    },
    timeOffText: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
        marginLeft: width(5),
        marginTop: height(2),
    },
    text2: {
        fontSize: width(3.4),
        color: AppColors.black,
        fontFamily: "black-sans-condensed-Light",
    },
    buttonText: {
        fontSize: width(3.3),
        color: AppColors.black,
        fontFamily: "black-sans-condensed-Regular",
    },
    buttonText1: {
        color: AppColors.green,
        fontFamily: "black-sans-condensed-bold",
    },
    text4: {
        fontSize: width(3.2),
        color: AppColors.black3,
        marginRight: width(2),
        fontFamily: "black-sans-condensed-bold",

    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: AppColors.gray1,
        marginTop: height(1),
        elevation: 0,
    },
    nameContainer: {
        marginTop: height(2),
        marginLeft: width(5),
    },
    toDoContainer: {
        width: width(90),
        alignSelf: 'center',
        marginTop: height(3),
        paddingHorizontal: width(5),
        paddingVertical: height(1.3),
        borderWidth: 1,
        borderColor: AppColors.grayBorder,
        backgroundColor: AppColors.white,
        borderRadius: 15,
        ...AppColors.shadowStyles,
    },
    threeButtonCont: {
        width: width(90),
        alignSelf: 'center',
        marginTop: height(2),
        borderWidth: 1,
        borderColor: AppColors.grayBorder,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: height(5.5),
        alignItems: 'center',
    },
    button: { width: '33%', alignItems: 'center' },
    animatedView: {
        position: 'absolute',
        width: '33%',
        backgroundColor: AppColors.lightGreen,
        height: '100%',
        borderRadius: 20,
        left: 0,
        zIndex: -1,
    },
});
export default styles;
