import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

function FavouritesScreen() {
  const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );

  return <MealsList items={favouriteMeals} />;
}

export default FavouritesScreen;
