import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import MealsScreen from "./screens/MealsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import FavouritesContextProvider from "./store/context/favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#a50d0d" },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#24180f",
        },
        drawerContentStyle: { backgroundColor: "#4d280c" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#fffb00",
        drawerActiveBackgroundColor: "#860303",
      }}
    >
      <Drawer.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#a50d0d" },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#24180f",
              },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                title: "Meals App",
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsScreen" component={MealsScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
