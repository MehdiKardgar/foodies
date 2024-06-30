// meals-grid.js

// This code renders a list of meal items based on the data passed in the "meals" prop.
// Each meal item is displayed using the "MealItem" component.

import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
