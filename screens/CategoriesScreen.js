import { StyleSheet, FlatList } from "react-native";
import {CATEGORIES} from '../data/dummy-data';

import CategoryGridTitle from "../components/CategoryGridTitle";



function renderCategoryItem(itemData) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}></CategoryGridTitle>;
}


const CategoriesScreen = (props) => {
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CategoriesScreen;