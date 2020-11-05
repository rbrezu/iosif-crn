import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView} from 'react-native';
import Carousel from "react-native-snap-carousel";
import styles, {itemWidth, sliderWidth} from "./styles";
import SliderEntry from "./SliderEntry";
import {flatListData} from "./data";

export default function App() {
    const _renderItemWithParallaxBig = ({item, index}, parallaxProps) => {
        return (
            <SliderEntry
                small={false}
                data={item}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    const _renderItemWithParallaxSmall = ({item, index}, parallaxProps) => {
        return (
            <SliderEntry
                small={true}
                data={item}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    const renderItem = ({item}) => {
        console.log(item);
        const {type, data} = item;
        switch (type) {
            case 'carousel-big':
                return <Carousel
                    layout={'default'}
                    data={data}
                    inactiveSlideScale={0.98}
                    inactiveSlideOpacity={0.7}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    renderItem={_renderItemWithParallaxBig}
                    slideStyle={{
                        margin: 0,
                        padding: 0
                    }}
                    containerCustomStyle={{
                        // marginTop: 15,
                        overflow: 'visible', // for custom animations
                        zIndex: 999
                    }}
                    contentContainerCustomStyle={{paddingLeft: 14, zIndex: 999}}
                />
            case 'carousel-small':
                return <Carousel
                    layout={'default'}
                    data={data}
                    inactiveSlideScale={0.98}
                    inactiveSlideOpacity={0.7}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    renderItem={_renderItemWithParallaxSmall}
                    slideStyle={{
                        margin: 0,
                        padding: 0
                    }}
                    containerCustomStyle={{
                        marginTop: 4,
                        overflow: 'visible', // for custom animations
                    }}
                    contentContainerCustomStyle={{paddingLeft: 14}}
                />
            case 'image':
                return <View style={{alignItems: 'center'}}><SliderEntry small={true} data={data}/></View>
            case 'image-row':
                return <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                    <SliderEntry small={true} data={data.image1} containerStyles={{width: itemWidth / 2}}/>
                    <SliderEntry small={true} data={data.image2}  containerStyles={{width: itemWidth / 2}}/>
                </View>
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={{overflow: 'visible', flex: 1}}
                      data={flatListData}
                      contentContainerStyle={{overflow: 'visible', padding: 16}}
                      renderItem={renderItem} keyExtractor={(item, index) => item.id}/>
        </SafeAreaView>
    );
}
