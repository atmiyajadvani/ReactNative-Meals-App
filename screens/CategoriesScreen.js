import { StyleSheet, FlatList } from "react-native";
import {CATEGORIES} from '../data/dummy-data';

import CategoryGridTitle from "../components/CategoryGridTitle";



function renderCategoryItem(itemData) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}></CategoryGridTitle>;
}

const numberOfColumns = 2;

const CategoriesScreen = (props) => {
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