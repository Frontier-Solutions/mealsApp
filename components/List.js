import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.bullet}>&#x2022;</Text>
      <Text style={styles.text}> {dataPoint}</Text>
    </View>
  ));
}
export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizonal: 8,
    marginHorizontal: 12,
    flexDirection: "row",
  },
  stepContainer: { flexDirection: "row" },
  bullet: { paddingLeft: 32 },
  text: {
    width: 350,
    paddingBottom: 8,
    fontSize: 16,
  },
});
