import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';

const colors = {
    black: '#1a1917',
    gray: '#888888'
};

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

export const slideHeight = viewportHeight * 0.36;
export const slideWidth = wp(80);
export const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const entryBorderRadius = 8;

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#363636',
        // padding: 16,
        overflow: 'visible'
    },
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    slideInnerContainerSmall: {
        height: 140,
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 22,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        // borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        backgroundColor: colors.black,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        height: undefined,
        resizeMode: 'cover',
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: colors.black,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    subtitle: {
        marginTop: 6,
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 12,
        fontStyle: 'italic'
    }
});
