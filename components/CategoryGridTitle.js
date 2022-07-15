import {View, Pressable, Text, StyleSheet, Platform } from 'react-native';

const CategoryGridTitle = ({ title, color, onPress }) => {

    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}} 
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
                >
                <View style={[styles.innerContainer , {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.10,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },

    button: {
        flex: 1,
    },

    buttonPressed: {
        opacity: 0.5,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },

});

export default CategoryGridTitle;