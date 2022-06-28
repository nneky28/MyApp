import { StyleSheet, Platform, NativeModules, } from "react-native";

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
export const globalStyles = StyleSheet.create({
    content: {
        alignItems: "flex-start",
        height: 30,
        flexDirection: "column",
        paddingHorizontal: 30,
        marginTop: STATUSBAR_HEIGHT,
        position: "relative",
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: STATUSBAR_HEIGHT,
    },
    barText: {
        alignItems: "flex-start",
        height: 30,
        flexDirection: "column",
        paddingHorizontal: 30,
        marginTop: STATUSBAR_HEIGHT,
        position: "relative",
    },
    items: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    imageBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    barText: {
        fontSize: 20,
        fontFamily: "black-sans-condensed-bold",
        textTransform: 'uppercase'

    },
    logo: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        marginTop: 50,
        overflow: "hidden",
        marginRight: 10,
    },
    itemText: {
        fontSize: 15,
        marginTop: 50,
        width: 200
    },
    icon: {
        marginTop: 50, marginLeft: -15
    },
    nav: {
        paddingTop: 15,
    },
    iconHeader: {
        marginLeft: 20,
        marginTop: 10
    },
    headerIcon: {
        marginRight: 20,

    },
    iconText: {
        color: '#000',
        left: 70,
        top: -25,
        fontWeight: '900'
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 10,
        marginTop: STATUSBAR_HEIGHT,

    },

    body: {
        width: '90%',
        paddingHorizontal: 10,
    },

    input: {
        margin: 5,
        height: 42,
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,

    },
    password: {
        textAlign: 'center',
        color: '#2898A4',
        marginTop: 5,
        fontFamily: "black-sans-condensed-bold",
    },
    eyes: {
        top: -35,
        alignSelf: 'flex-end'
    },

    edgeLogo: {
        height: 30,
        justifyContent: 'center',
    },

    buttonText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 15,
        fontFamily: "black-sans-condensed-bold",
    },
    bgText: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: "black-sans-condensed-bold",
        marginBottom: 5

    },
    bottomContainer: {
        marginTop: 40
    },

    bottomText: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 10,

    },



})








