import { View, Text, Dimensions, FlatList, Animated, Image, StyleSheet, findNodeHandle, TouchableOpacity } from 'react-native'
import React, { useRef, createRef, forwardRef, useEffect, useState, useCallback } from 'react'





const { width, height } = Dimensions.get("screen")
const Pills = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const onItemPress = useCallback((itemIndex) => {
        ref?.current?.scrollToOffSet({
            offset: itemIndex * width
        })
    })

    const images = {
        People:
            'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        My_Team:
            'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        Whos_Out:
            'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        Celebrations:
            'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',

    };

    const data = Object.keys(images).map((i) => ({
        key: i,
        title: i,
        image: images[i],
        ref: createRef()
    }));
    const Tab = forwardRef(({ item, onItemPress }, ref) => {
        return <TouchableOpacity onPress={onItemPress}>
            <View ref={ref}>
                <Text style={{ fontSize: 64 / data.length, fontWeight: '400' }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    })

    const Indicator = ({ measures, scrollX }) => {

        const inputRange = data.map((_, i) => i * 3);
        const inputWidth = scrollX.interpolate({
            inputRange,
            outputRange: measures.map((measure) => measure.width)
        })

        const translateX = scrollX.interpolate({
            inputRange,
            outputRange: measures.map((measure) => measure.x)
        })
        return <Animated.View
            style={{
                position: 'absolute',
                height: 4,
                bottom: -10,
                width: inputWidth,
                left: 0,
                backgroundColor: '#2898A4',
                transform: [{
                    translateX
                }]
            }}
        />
    }
    const Tabs = ({ data, scrollX, onItemPress }) => {
        const [measures, setMeasures] = useState([])

        const containerRef = useRef()
        useEffect(() => {
            let m = []
            data.forEach(item => {
                item.ref.current.measureLayout(containerRef.current,
                    (x, y, width, height) => {
                        m.push({
                            x, y, width, height
                        })

                        if (m.length === data.length) {
                            setMeasures(m)
                        }
                    }

                )
            });
        }, [])

        return (
            <View style={{ position: 'absolute', top: 40, width }}>

                <View
                    ref={containerRef}
                    style={{ justifyContent: 'space-evenly', flex: 1, flexDirection: 'row' }}>
                    {data.map((item, index) => {
                        return <Tab key={item.key} item={item} ref={item.ref} onItemPress={() => onItemPress(index)} />
                    })}
                </View>

                {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX} />}


            </View>
        )
    }

    return (
        <React.Fragment>
            <View>
                <Animated.FlatList
                    // ref={ref}
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    // onScroll={Animated.event(
                    //     [{ nativeEvent: { contentOffSet: { x: scrollX } } }],
                    //     { listener },
                    //     { useNativeDriver: false }
                    // )}

                    bounces={false}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => {
                        return <View style={{ width, height }}>
                            <Image source={{ uri: item.image }} style={{ flex: 1, resizeMode: 'cover' }} />
                        </View>
                    }}
                />
                <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgb(0,0,0,0.3)' },]} />

            </View>
            <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
        </React.Fragment>
    )
}

export default Pills