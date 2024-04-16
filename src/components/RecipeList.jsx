import Recipe from "./Recipe";
import classes from "./RecipeList.module.css";
import Section
 from "./UI/Section";
const RecipeList = (props) => {
  return (
    <Section>
      <ul className={classes["recipes-list"]}>
        {props.recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </ul>
    </Section>
  );
};

export default RecipeList;
