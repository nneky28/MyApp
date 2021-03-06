import React from 'react';
import ContentLoader, { BulletList, Facebook } from 'react-content-loader/native'
import LottieView from 'lottie-react-native';
import { Text, Image } from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    SvgUri,
} from 'react-native-svg';
import AppColors from '../styles/AppColors';
import { View, Dimensions } from 'react-native';
import { height, width } from 'react-native-dimension';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

const winDimensions = Dimensions.get("window")
const winWidth = winDimensions.width;
const winHeight = winDimensions.height

export const PageLoader = props => {
    return (
        [...'123567'].map((item, i) => (
            <ContentLoader
                key={i}
                viewBox="0 0 778 116" width={350} height={100} {...props}
                backgroundColor={AppColors.gray1}
            >
                <Rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
                <Rect x="28" y="29" rx="0" ry="0" width="258" height="32" />
                <Rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
                <Rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
                <Rect x="29" y="116" rx="0" ry="0" width="749" height="32" />
            </ContentLoader>
        ))
    )
}

export const Reload = props => {
    return (
        [...'1'].map((item, i) => (
            <ContentLoader
                key={i}
                viewBox="0 0 778 116" width={350} height={100} {...props}
                backgroundColor={AppColors.gray1}
            >
                <Rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
                <Rect x="28" y="29" rx="0" ry="0" width="258" height="32" />
                <Rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
                <Rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
                <Rect x="29" y="116" rx="0" ry="0" width="749" height="32" />
            </ContentLoader>
        ))
    )
}

export const LottieIcon = ({ icon, size }) => {
    return (
        <LottieView
            source={icon}
            autoPlay={true}
            style={{
                width: size || 150,
                height: size || 150
            }}
            loop={true}
        />
    )
}

export const ProfileLoader = () => (
    <ContentLoader
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    // {...props}
    >
        <Rect x="80" y="73" rx="3" ry="3" width="254" height="6" />
        <Rect x="78" y="88" rx="3" ry="3" width="254" height="6" />
        <Rect x="150" y="103" rx="3" ry="3" width="118" height="6" />
        <Circle cx="210" cy="40" r="22" />
    </ContentLoader>
)

export const P = (props) => (
    <Text
        style={{
            fontSize: props.fontSize || width(3.5),
            fontFamily: "black-sans-condensed-Light",
            textAlign: props.textAlign,
            ...props.style
        }}
    >
        {props.children}
    </Text>
)

export const H1 = (props) => (
    <Text
        style={{
            fontSize: width(props.fontSize) || width(3),
            fontFamily: "black-sans-condensed-bold",
            color: props.color || 'black',
            textAlign: props.textAlign,
            ...props.style
        }}
    >
        {props.children}
    </Text>
)


export const SizedBox = (props) => (
    <View
        style={{
            height: height(props.size || 1),
            backgroundColor: props.backgroundColor || AppColors.white
        }}
    />
)
export const ItemWithText = ({ icon, text, onPress }) => {
    return (
        <TouchableOpacity
            style={globalStyles.row1}
            onPress={onPress}
            activeOpacity={0.8}>
            <Image source={icon} resizeMode="contain" style={globalStyles.icon1} />
            <Text style={globalStyles.text3}>{text}</Text>
        </TouchableOpacity>
    );
};

export const Container = (props) => (
    <View
        style={{
            flex: props.flex || 1,
            width: props.width ? width(props.width) : props.widthPercent ? props.widthPercent : '100%',
            padding: props.padding ? width(props.padding) : height(2),
            paddingVertical: props.paddingVertical ? height(props.paddingVertical) : height(0),
            paddingHorizontal: props.paddingHorizontal ? width(props.paddingHorizontal) : width(0),
            marginTop: props.marginTop ? height(props.marginTop) : 0,
            marginLeft: props.marginLeft ? width(props.marginLeft) : 0,
            paddingTop: props.paddingTop ? height(props.paddingTop) : 0,
            paddingRight: props.paddingRight ? width(props.paddingRight) : 0,
            marginRight: props.marginRight ? width(props.marginRight) : 0,
            backgroundColor: props.backgroundColor || AppColors.white,
            // marginBottom: props.marginBottom || height(1),
            ...props.style
        }}
    >
        {props.children}
    </View>
)

export const AppButton = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
    >
        <Container
            backgroundColor={props.backgroundColor || AppColors.green}
            style={{
                justifyContent: "center",
                alignItems: "center",
                padding: height(5),
                width: props.width ? width(props.width) : 0,
                paddingVertical: props.paddingVertical ? height(props.paddingVertical) : height(2),
            }}
        >
            {props.loading ? <ActivityIndicator size={height(3)}
                color={AppColors.white}
            /> : <H1 color={props.color}>{props.text}</H1>}
        </Container>
    </TouchableOpacity>
)

export const TouchWrap = (props) => (
    <TouchableRipple
        onPress={props.onPress}
        rippleColor="transparent"
    >
        {props.children}
    </TouchableRipple>
)
export const Width = (val) => {
    let res;
    val === undefined || null ? (res = null) : (res = (val / 100) * winWidth);
    return res;
};
export const Rounded = (props) => (
    <Container
        style={{
            // width: Width(props.size || 5),
            // height: Width(props.size || 5),
            width: height(10),
            height: height(10),
            borderRadius: 50,
            backgroundColor: props.backgroundColor || AppColors.green,
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        {props.children}
    </Container>
)
export const EmptyStateWrapper = (props) => (
    <Container
        marginTop={props.marginTop || 8}
        style={{
            alignItems: "center",
            backgroundColor: props.backgroundColor || AppColors.white
        }}
    >
        <ImageWrap
            url={props.icon}
            height={props.height || 30}
            fit="contain"
        />
        <SizedBox height={props?.spacing || 2} />
        {
            props.header_1 ? (
                <H1
                    color={AppColors.black3}
                    fontSize={5}
                >{props.header_1}</H1>
            ) : null
        }
        <SizedBox height={props?.spacing || 2} />
        {
            props.header_2 ? <React.Fragment>
                <H1 color={AppColors.black3}
                    fontSize={5}>{props.header_2}</H1>
                <SizedBox height={props?.spacing || 2} />
            </React.Fragment> : null
        }
        {
            props.sub_text ? <P color={AppColors.black2}>{props.sub_text}</P> : null
        }
    </Container>
)