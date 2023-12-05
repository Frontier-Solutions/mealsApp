import { useLayoutEffect } from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";

function DetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [selectedMeal, navigation]);

  function renderIngredients(itemData) {
    const ingredient = itemData.item;
    return <Text style={styles.ingredient}>{ingredient}</Text>;
  }

  function renderSteps(itemData) {
    const steps = itemData.item;
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.bullet}>&#x2022;</Text>
        <Text style={styles.step}> {steps}</Text>
      </View>
    );
  }

  return (
    <>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
          <FlatList
            data={selectedMeal.ingredients}
            renderItem={renderIngredients}
          />
        </View>
        <View>
          <Text style={styles.subTitle}>Method</Text>
          <FlatList data={selectedMeal.steps} renderItem={renderSteps} />
        </View>
      </View>
    </>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  contentContainer: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },
  ingredientsContainer: {
    backgroundColor: "white",
    paddingBottom: 16,
  },
  subTitle: {
    padding: 16,
    fontSize: 24,
  },
  ingredient: {
    paddingHorizontal: 32,
    fontSize: 18,
  },
  stepContainer: { flexDirection: "row" },
  bullet: { paddingLeft: 32 },
  step: {
    width: 350,
    paddingBottom: 8,
    fontSize: 16,
  },
});
