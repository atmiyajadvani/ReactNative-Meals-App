import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native';

const MealItem = ({title, imageURL, duration, complexity, affordability}) => {
    return(
        <View style={styles.mealItem}>
            <Pressable 
                android_rippl={{color: '#ccc'}}
                style={({pressed}) => pressed ? styles.buttonPressed : null}
                >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageURL}} style={styles.image}></Image>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}</Text>
                        <Text style={styles.detailItem}>{complexity}</Text>
                        <Text style={styles.detailItem}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({

    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.20,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 20,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    },

    buttonPressed: {
        opacity: 0.5,
    },

    innerContainer:{
        overflow: 'hidden',
        borderRadius: 8,

    },

    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        paddingTop: 15,
    },

    details: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
    },

    detailItem:{
        marginHorizontal: 4,
        fontSize: 12,
    },
    


});

export default MealItem;

