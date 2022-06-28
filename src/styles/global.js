import { StyleSheet, Platform, NativeModules, Dimensions } from "react-native";
import AppColors from "./AppColors";
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
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    tabsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    tabsTitle: {
        fontSize: width(10),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
        textAlign: 'center',
        textTransform: 'uppercase'
    },

    ModalContainer: {
        flexDirection: 'row',
        backgroundColor: AppColors.white,
        width: width(25),
        paddingHorizontal: width(20),
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: width(1.5),
        borderColor: AppColors.grayBorder,
        borderWidth: 1,
        marginTop: height(1.5),
        height: height(20),
        justifyContent: 'center'
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1

    },

    uncheckIcon: {
        width: width(3),
        height: height(2),
        tintColor: AppColors.black1,
        marginRight: width(8)
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        padding: width(2),

    },

    teamContent: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: AppColors.grayBorder,
        borderWidth: 1,
        borderRadius: width(3),
        paddingVertical: height(3.5),
        width: width(43.25),

    },
    birthdayCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: AppColors.gray,
        borderWidth: 1,
        borderRadius: width(1),
        paddingHorizontal: width(4),
        width: width(40),
        backgroundColor: '#eee',
        marginLeft: width(3),
        marginTop: height(2),
        paddingVertical: height(1)
    },

    assetsCard: {
        flexDirection: 'row',
        paddingHorizontal: width(6),
        paddingVertical: height(2)
    },
    assetsButton: {
        marginRight: width(7),
    },

    teamContainer: {
        width: width(43),
        alignItems: 'center',
        margin: width(2),
        marginBottom: height(16)
    },

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
        fontFamily: "black-sans-condensed-Regular",
    },


    textMe: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
        marginTop: height(1),
        textAlign: 'center'
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
    header2: {
        width: width(100),
        paddingHorizontal: width(5),
        marginTop: height(2),
        marginBottom: height(1.5),
        flexDirection: 'row',
        alignItems: 'center',

    },

    leftIcon1: {
        width: width(5),
        height: width(3),
    },

    leftIcon: {
        width: width(9),
        height: width(9),
    },
    rightIcon: {
        width: width(5),
        height: height(3),
    },
    screenTitle: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
    },
    headerIcon: {
        // backgroundColor: AppColors.black
    },
    iconText: {
        fontSize: width(5),
        // fontFamily: FontFamily.BlackSansBold,
        fontWeight: 'bold',
        color: AppColors.black,
        // marginLeft: width(3)
        padding: width(1)
    },
    screenTitle1: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: 'BlackSans-Bold',
        marginLeft: 100
    },

    screenDetails: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: width(80),
        alignItems: 'center',
        marginLeft: width(20)


    },

    userInfo: {
        marginTop: height(3),
        marginBottom: height(2),
        justifyContent: 'center',
        alignItems: 'center'
    },

    selectedHeading: {
        fontSize: width(3.4),
        // paddingRight: width(4),
        color: AppColors.green,
        fontFamily: "black-sans-SemiBold",
    },

    heading: {
        fontSize: width(3.4),
        color: AppColors.black1,
        paddingHorizontal: width(7),
        fontFamily: "black-sans-condensed-Regular",
    },
    scrollViewContainer: {
        paddingTop: height(2),
        width: width(95),
        justifyContent: 'space-evenly'
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: AppColors.grayBorder,
        marginTop: height(1),
        elevation: 0,

    },
    compLine: {
        width: width(78),
        marginLeft: width(2),
        // marginRight: width(51),
        height: 1,
        backgroundColor: AppColors.grayBorder,

        elevation: 0,
    },
    line2: {
        width: '100%',
        height: 1,
        backgroundColor: AppColors.gray1,
        elevation: 0,
    },
    line3: {
        width: '100%',
        height: 1,
        backgroundColor: AppColors.grayBorder,
        marginTop: height(1),
        elevation: 0,
        marginTop: height(-11)

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

    animated2: {
        width: '80%',
        backgroundColor: AppColors.green,
        height: height(0.8),
        marginTop: height(1),
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginLeft: width(5),



    },
    heading1: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
    },
    headingContainer: {
        marginTop: height(2),
        width: width(90),
        marginBottom: height(2),
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    listItemContainer2: {
        width: width(90),
        borderColor: AppColors.gray1,
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: height(2),
        paddingHorizontal: width(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 2,
        shadowColor: 'gray',
    },

    listItemContainer: {
        width: width(90),
        backgroundColor: AppColors.white,
        paddingVertical: height(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'


    },
    giftIcon: {
        padding: width(1.2)
    },

    listItemContainer3: {
        width: width(82),
        borderColor: AppColors.gray1,
        backgroundColor: AppColors.white,
        paddingHorizontal: width(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: height(1),
        marginTop: height(3),
        borderWidth: width(0.2),
        borderColor: '#FF7372',
        marginLeft: width(4),
        padding: width(2),
        borderRadius: width(3)

    },

    scrollViewWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },


    detailsContainer: {
        backgroundColor: AppColors.white,
        flexGrow: 1

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
        height: height(8),
        width: height(8),
        borderRadius: height(4.75)
    },
    avatarStyle4: {
        height: height(5),
        width: height(5),
        borderRadius: height(4.75),
        marginTop: height(1)


    },

    assetsImage: {
        height: height(13),
        width: height(18),


    },

    avatarStyleContainer: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    textContainer: {
        justifyContent: 'space-between',
        height: height(5),
        marginLeft: width(2),
        marginTop: height(1.5),

    },
    textContent: {
        justifyContent: 'space-between',
        marginLeft: width(4),
        // marginTop: height(1.5),
        paddingHorizontal: width(1)
    },

    textAssets: {
        justifyContent: 'space-between',
        paddingHorizontal: width(6)
    },
    outFooter: {
        marginTop: height(3),
        marginBottom: height(3),
        alignItems: 'center'
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
        fontFamily: "black-sans-condensed-bold",
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
        fontFamily: "black-sans-condensed-Regular",
    },
    titleText: {
        fontSize: width(3),
        color: AppColors.black1,
        marginTop: height(0.5),
        fontFamily: "black-sans-Regular",
    },

    mac: {
        fontSize: width(3),
        color: AppColors.black1,
        marginTop: height(0.5),
        fontFamily: "black-sans-Regular",

    },
    apple: {
        fontSize: width(3),
        height: height(5),
        fontFamily: "black-sans-semi-bold",
    },
    nameText: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
        marginTop: height(1),
        textAlign: 'center'
    },
    roleText: {
        fontSize: width(5),
        color: AppColors.black1,
        alignSelf: 'center',
        fontFamily: "black-sans-condensed-bold",
    },
    role: {
        fontSize: width(4),
        color: AppColors.black1,
        alignSelf: 'center',
        fontFamily: "black-sans-condensed-bold",
    },

    subRole: {
        fontSize: width(3),
        color: AppColors.black1,
        alignSelf: 'center',
        fontFamily: "black-sans-condensed-bold",
        alignSelf: 'center'
    },

    detailsButton: {
        width: width(90),
        borderColor: AppColors.grayBorder,
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
        fontFamily: "black-sans-condensed-bold",
        marginBottom: height(2)
    },

    report2: {
        fontSize: width(4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
        marginBottom: height(2)
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
        fontFamily: "black-sans-condensed-Regular",
    },
    searchBoxContainer: {
        width: width(90),
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBoxStyle: {
        width: width(90),
        alignSelf: 'flex-start'
    },

    // people style ends
    scrolls: {
        alignItems: 'center',
        // marginBottom: height(35)
    },

    // login screen starts 
    text: {
        fontSize: width(4.5),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
        marginTop: height(5),
        marginLeft: '5%',
    },

    text3: {
        fontSize: width(3.4),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-Regular",
        marginLeft: '5%',
    },
    text2: {
        fontSize: width(2.9),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-Regular",
    },
    lineBar: {
        width: '100%',
        height: 1,
        backgroundColor: AppColors.gray,
        marginTop: height(1),
        elevation: 0
    },
    barOption: {
        flex: 1,
        alignItems: 'flex-end',

    },
    icon1: {
        width: width(5),
        height: width(5),
        tintColor: AppColors.black1,
    },
    icon: {
        width: width(3),
        height: width(3),
        tintColor: AppColors.black1,
    },

    row: { flexDirection: 'row', alignItems: 'center' },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: '5%',
        marginTop: height(3),
        marginBottom: height(2)
    },
    margin: { marginLeft: '7%', width: '65%' },

    horizontalListContainer: {
        width: width(35),
        height: height(17),
        paddingHorizontal: width(2),
        paddingVertical: height(1)
    },
    headingText: {
        fontSize: width(3),
        color: AppColors.black1,
        fontFamily: "black-sans-condensed-bold",
    },


})








