import { StyleSheet, FlatList } from "react-native";
import {CATEGORIES} from '../data/dummy-data';

import CategoryGridTitle from "../components/CategoryGridTitle";


const numberOfColumns = 2;

const CategoriesScreen = ({navigation}) => {


    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }

        return <CategoryGridTitle 
                    title={itemData.item.title} 
                    color={itemData.item.color}
                    onPress={pressHandler}
                    
                    ></CategoryGridTitle>;
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={numberOfColumns}
            />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CategoriesScreen;