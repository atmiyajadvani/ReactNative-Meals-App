import { StyleSheet, View, FlatList, Text } from "react-native";
import { useLayoutEffect } from "react";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({route, navigation}) => {

    const catID = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    });


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catID
        ).title;

        navigation.setOptions({
            title: categoryTitle
        });

    }, [catID, navigation ]);




    function renderMealItem(itemData) {

        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageURL: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        return(
            <MealItem {...mealItemProps}></MealItem>
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default MealsOverviewScreen;