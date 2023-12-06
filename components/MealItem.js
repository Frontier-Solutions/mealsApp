import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  const navigation = useNavigation();

  function selectedMealHandler() {
    navigation.navigate("DetailsScreen", {
      mealId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={selectedMealHandler}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>{duration}m</Text>
          <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsText: {
    marginHorizontal: 4,
    paddingHorizontal: 4,
    fontSize: 12,
    alignSelf: "stretch",
    textAlign: "center",
  },
});
