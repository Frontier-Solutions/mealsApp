import { useContext, useLayoutEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";

function DetailsScreen({ route, navigation }) {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

  function addRemoveFavourites() {
    if (mealIsFavourite) {
      favouriteMealsCtx.removeFavourite(mealId);
    } else {
      favouriteMealsCtx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={addRemoveFavourites}
          />
        );
      },
    });
  }, [selectedMeal, navigation, addRemoveFavourites]);

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
          <List data={selectedMeal.ingredients} />
        </View>
        <View>
          <Text style={styles.subTitle}>Method</Text>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 350,
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
});
