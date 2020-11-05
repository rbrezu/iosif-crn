import React from 'react';
import {Image, TouchableOpacity, View, Text} from "react-native";
import {ParallaxImage} from "react-native-snap-carousel";
import styles from './styles';

export default class SliderEntry extends React.Component {

    get image() {
        const {data: {photo}, parallax, parallaxProps} = this.props;

        return parallax ? (
            <ParallaxImage
                source={{uri: photo}}
                containerStyle={styles.imageContainer}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={'rgba(255, 255, 255, 0.4)'}
                {...parallaxProps}
            />
        ) : (
            <Image
                source={{uri: photo}}
                style={styles.image}
                resizeMode='cover'
            />
        );
    }

    render() {
        const {data: {title}, handler, small, containerStyles = {}} = this.props;

        const uppercaseTitle = title ? (
            <Text
                style={styles.title}
            >
                {title.toUpperCase()}
            </Text>
        ) : false;

        return (
            <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.slideInnerContainer, small ? styles.slideInnerContainerSmall : {}, containerStyles]}
                onPress={handler}
            >
                <View style={styles.shadow}/>
                <View style={styles.imageContainer}>
                    {this.image}
                    <View style={{position: 'absolute', bottom: 12, left: 12, right :12}}>
                        {uppercaseTitle}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
