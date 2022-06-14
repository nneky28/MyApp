import { StyleSheet, Platform, NativeModules, Dimensions } from "react-native";
import AppColors from "./AppColors";
import { FontFamily } from "../utils/FontFamily";
import { width, height } from 'react-native-dimension';


const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
const winDimensions = Dimensions.get("window")
const winWidth = winDimensions.width;
const winHeight = winDimensions.height

export const globalStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: AppColors.white,
        width: width(90),
        paddingHorizontal: width(2),
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: width(1.5),
        borderColor: AppColors.grayBorder,
        borderWidth: 1,
        marginTop: height(1.5)
    },

    teamContent: {
        width: width(43),
        borderColor: AppColors.gray1,
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: height(8),
        alignItems: 'center',
        elevation: 20,
        shadowColor: '#52006A',
        marginTop: height(6),
    },

    // teamContainer: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     backgroundColor: '#000'
    // },

    inputStyle: {
        width: width(90),
    },
    inputStyleIOS: {
        width: width(90),
        height: height(4),
        textAlignVertical: "center",
        marginLeft: 5
    },
    text1: {
        fontSize: width(2.75),
        color: AppColors.black3,
        marginLeft: width(5),
        fontFamily: FontFamily.BlackSansRegular
    },

    textMe: {
        marginTop: 15,
        fontSize: width(4),
        color: AppColors.black1,
        marginRight: width(2),
        textAlign: 'center',
        fontWeight: 'bold'
    },
    searchIcon: {
        width: width(4),
        height: height(2),
    },
    mainViewContainer: {
        backgroundColor: AppColors.white,
        alignItems: 'center',
    },
    mainViewContainer2: {
        backgroundColor: AppColors.white,
        alignItems: 'center',
        flex: 1,
    },
    header1: {
        width: width(100),
        paddingHorizontal: width(5),
        marginTop: height(2),
        marginBottom: height(1.5),
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        width: width(100),
        paddingHorizontal: width(5),
        marginTop: height(2),
        marginBottom: height(1.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftIcon: {
        width: width(5),
        height: width(5),
    },
    rightIcon: {
        width: width(5),
        height: height(3),
    },
    screenTitle: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: FontFamily.BlackSansBold,
    },
    screenTitle1: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: FontFamily.BlackSansBold,
        marginLeft: 100
    },


    selectedHeading: {
        fontSize: width(3.4),
        paddingRight: width(5),
        color: AppColors.green,
        fontFamily: FontFamily.BlackSansSemiBold,
    },
    heading: {
        fontSize: width(3.4),
        color: AppColors.black1,
        paddingHorizontal: width(7),
        fontFamily: FontFamily.BlackSansRegular,
    },
    scrollViewContainer: {
        paddingTop: height(2),
        width: width(95),
        justifyContent: 'space-evenly'
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: AppColors.gray1,
        marginTop: height(1),
        elevation: 0,
    },
    line2: {
        width: '100%',
        height: 1,
        backgroundColor: AppColors.gray1,
        elevation: 0,
    },
    animated: {
        width: '80%',
        backgroundColor: AppColors.green,
        height: height(0.8),
        marginTop: height(0.5),
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginLeft: width(3.5)
    },
    heading1: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: FontFamily.BlackSansBold,
    },
    headingContainer: {
        marginTop: height(2),
        width: width(90),
        marginBottom: height(2),
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    listItemContainer: {
        // touched width 90-43
        width: width(90),
        borderColor: AppColors.gray1,
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: height(1),
        paddingHorizontal: width(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: width(4)
        // added mb
    },
    scrollViewWrapper: {
        flexGrow: 1,
        paddingBottom: 60
    },


    detailsContainer: {
        backgroundColor: AppColors.white,
        flexGrow: 1,
        // height: height(90),

        // backgroundColor: 'red'
    },
    avatarStyle3: {
        height: height(15),
        width: height(15),
        borderRadius: height(4.75),
        alignSelf: 'center',
        marginTop: height(1)
    },


    avatarStyle2: {
        height: height(5),
        width: height(5),
        borderRadius: height(4.75),
        marginLeft: 25
    },

    avatarStyle: {
        height: height(5),
        width: height(5),
        borderRadius: height(4.75),

    },
    textContainer: {
        justifyContent: 'space-between',
        height: height(5),
        marginLeft: width(2)
    },

    flatListIcon: {
        height: height(2.5),
        width: width(4.5),
        color: AppColors.black1
    },
    iconAndTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: height(6)
    },
    heading2: {
        fontSize: width(3),
        marginRight: width(2),
        fontFamily: FontFamily.BlackSansBold,
        color: AppColors.black2,
    },
    downIcon: {
        width: width(3),
        height: width(3),
    },
    filterIconContainer: {
        backgroundColor: AppColors.lightGreen,
        paddingVertical: height(2.2),
        paddingHorizontal: width(2.5),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 6,
        marginTop: height(1.5),
        marginLeft: width(2)
    },

    filterIconContainerIOS: {
        backgroundColor: AppColors.lightGreen,
        paddingVertical: height(1),
        paddingHorizontal: width(2),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 6,
        marginTop: height(1.5),
        marginLeft: width(2)
    },

    filterIcon: {
        width: width(5),
        height: height(2.5),
    },
    filterIconIOS: {
        width: width(5),
        height: height(2),
    },
    subText: {
        fontSize: width(2.5),
        color: AppColors.black1,
        fontFamily: FontFamily.BlackSansRegular,
    },
    titleText: {
        fontSize: width(3),
        color: AppColors.black1,
        marginRight: width(2),
        fontFamily: FontFamily.BlackSansBold,
    },
    roleText: {
        fontSize: width(5),
        color: AppColors.black1,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    role: {
        fontSize: width(4),
        color: AppColors.black1,
        alignSelf: 'center',
        fontFamily: FontFamily.BlackSansBold,
    },

    subRole: {
        fontSize: width(4),
        color: AppColors.black1,
        alignSelf: 'center',
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    detailsButton: {
        width: width(90),
        borderColor: AppColors.gray1,
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: height(2),
        paddingHorizontal: width(3),
        marginTop: height(5),
        marginLeft: width(5)
    },
    reportContainer: {
        marginTop: height(5),
        marginLeft: width(5)

    },
    report: {
        fontSize: width(4),
        color: AppColors.black1,
        fontWeight: 'bold',
        marginBottom: 5
    },


    smallBtnContainer: {
        height: height(2.5),
        backgroundColor: AppColors.green,
        borderRadius: 30,
        padding: 0,
        justifyContent: 'center',
        paddingHorizontal: width(2.5),
        alignItems: 'center'
    },
    smallText: {
        fontSize: width(2.25),
        color: AppColors.white,
        fontFamily: FontFamily.BlackSansRegular,
    },
    searchBoxContainer: {
        width: width(90),
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBoxStyle: {
        width: width(79),
        alignSelf: 'flex-start'
    },

    // people style ends

    // login screen starts 





})








