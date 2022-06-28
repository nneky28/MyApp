import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useIsFocused } from '@react-navigation/native';
import { height, width } from 'react-native-dimension';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import AppColors from '../styles/AppColors';

const ScreenWrap = ({
    allowScrollToPosition,
    children,
    statusBarColor = AppColors.white,
    transclucent = false,
    scrollEnabled = false,
    headerUnScrollable = () => null,
    footerUnScrollable = () => null,
    barStyle = 'dark-content',
    backgroundColor = AppColors.white,
}) => {
    function FocusAwareStatusBar(props) {
        const isFocused = useIsFocused();
        return isFocused ? <StatusBar {...props} /> : null;
    }
    const content = () => {
        const scrollRef = useRef(null);
        const scrollPosition = useSelector(state => state.Config.scrollPosition);
        if (allowScrollToPosition) {
            scrollRef.current?.scrollToPosition(0, scrollPosition.y, true)
        }
        return (
            <View style={styles.container}>
                <FocusAwareStatusBar
                    barStyle={barStyle}
                    backgroundColor={statusBarColor}
                    translucent={transclucent}
                />
                {!transclucent && (
                    <SafeAreaView
                        style={(styles.container, { backgroundColor: statusBarColor })}
                    />
                )}
                {headerUnScrollable()}
                {scrollEnabled ? (
                    <KeyboardAwareScrollView
                        ref={scrollRef}
                        style={[styles.container, { backgroundColor: backgroundColor }]}
                        contentContainerStyle={[
                            styles.contentContainer,
                            { paddingVertical: height(2) },
                        ]}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                        {children}
                    </KeyboardAwareScrollView>
                ) : (
                    <View
                        style={{
                            backgroundColor: backgroundColor,
                            // flex: 1,
                        }}>
                        {children}
                    </View>
                )}
                {footerUnScrollable()}
            </View>
        );
    };
    return content();
};



export default ScreenWrap;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flex: 1,
        paddingBottom: height(1.5),
    }
});
