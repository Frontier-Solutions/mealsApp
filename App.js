import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Hello World!!!!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <CategoriesScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "stretch",
    textAlign: "center",
  },
});
