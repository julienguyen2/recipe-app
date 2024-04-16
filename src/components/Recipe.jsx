import classes from "./Recipe.module.css";

const Recipe = (props) => {
  const ingredientsWithNewLines = props.ingredients.split(",").join(",\n");
  const instructionsWithNewLines = props.instructions.split(".").join(".\n");

  return (
    <li className={classes.recipe}>
      <h2>{props.title}</h2>
      <h3>Ingredients: </h3>
      <pre>{ingredientsWithNewLines}</pre>

      <h3>Instructions: </h3>
      <pre>{instructionsWithNewLines}</pre>
    </li>
  );
};

export default Recipe;
