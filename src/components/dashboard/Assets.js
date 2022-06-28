import { View, Text, Image } from 'react-native'
import React from 'react'
import AppColors from '../../styles/AppColors'
import { Container, H1, P, Rounded } from './../../utils/MyComponent';
import { height, width } from 'react-native-dimension';
import ButtonComponent from './../ButtonComponent';
import { globalStyles } from './../../styles/global';

const Assets = () => {
    return (
        <Container
            backgroundColor={AppColors.white}
            width={90}
            marginTop={3}
            style={{
                borderWidth: width(0.5),
                borderColor: AppColors.grayBorder,
                borderRadius: width(5),
                alignSelf: 'center',
                marginRight: width(3)

            }}
        >
            <View style={globalStyles.assetsCard} >

                <Image source={require('../../assets/images/dummy/placeholder4.png')} style={globalStyles.assetsImage} />


                <View style={globalStyles.textAssets}>
                    <H1 numberOfLines={1}>Apple MacBook Pro 2017</H1>
                    <P style={globalStyles.apple}>Apple Touch Bar </P>

                    <View style={globalStyles.assetsButton}>

                        <ButtonComponent
                            color={AppColors.black}
                            title={'Report'}
                            width={110}
                            padding={7}
                            borderWidth={1}
                            borderRadius={20}
                            backgroundColor={AppColors.transparent}
                            borderColor={AppColors.blue2}

                        />
                    </View>
                </View>

            </View>

        </Container>
    )
}

export default Assets