import { View, Text, StyleSheet, Image } from 'react-native'
import * as React from 'react';
import { Container, H1, P } from '../../utils/MyComponent'
import AppColors from '../../styles/AppColors'
import { height, width } from 'react-native-dimension';
import { ColorList } from './../../styles/AppColors';
import { FontFamily } from '../../utils/FontFamily';
import * as Progress from 'react-native-progress';
// import ProgressCircle from 'react-native-progress-circle'
import CommonStyles from './../../styles/CommonStyles';
import { upIcon } from '../../assets/images';


const Active = () => {
    const [step, setStep] = React.useState(50);
    let progress = step > 4 ? step / 4 : 2;




    return (
        <Container
            backgroundColor={AppColors.white}
            width={50}
            marginTop={3}

            style={{
                // height: height(30),
                borderWidth: width(0.5),
                borderColor: AppColors.grayBorder,
                borderRadius: width(5),
                alignSelf: 'center',
                marginRight: width(3),
            }}
        >
            <View style={styles.bar}>
                <View style={styles.row}>
                    <H1 fontSize={4} >Travel Leave</H1>
                    <Image
                        resizeMode="contain"
                        source={upIcon}
                        style={styles.icon}
                    />
                </View>
                <P fontSize={12} style={{ marginBottom: height(2) }}>Holiday</P>
                <Progress.Circle
                    borderWidth={15}
                    color={AppColors.blue3}
                    shadowColor="#999"
                    bgColor="#fff"
                    size={120}
                    progress={progress}
                // showsText={true}
                >
                    <View style={styles.textBar}>
                        <Text>3\5</Text>

                        <Text>Days</Text>
                    </View>

                </Progress.Circle>
            </View>
            <View style={styles.line} />

            <View style={CommonStyles.marginTop_2}>
                <H1 style={styles.end}>End Leave</H1>
            </View>

        </Container>
    )
}

export default Active;

const styles = StyleSheet.create({


    Container: {
        marginTop: height(2),
        flexDirection: 'row',

    },
    gift: {
        marginTop: height(2),
        marginLeft: width(20)
    },
    timeOffText: {
        marginTop: height(3),
        fontSize: width(5),
        fontFamily: FontFamily.BlackSansBold,
        marginLeft: width(4)
    },
    bar: {
        alignItems: 'center',
        paddingVertical: height(3)
    },
    line: {
        width: width(37),
        height: 1,
        backgroundColor: AppColors.grayBorder,
        marginTop: height(1),
        elevation: 0,
        alignSelf: 'center'

    },
    end: {
        textAlign: 'center',
        color: AppColors.red,
        marginBottom: height(2)
    },
    textBar: {
        position: 'absolute',
        textAlign: 'center',
        left: width(13),
        top: height(5),
        fontSize: width(3.5)

    },
    row: { flexDirection: 'row', alignItems: 'center' },
    icon: {
        width: width(4),
        height: width(3),
        marginLeft: width(2),
        tintColor: AppColors.black,
    },
})