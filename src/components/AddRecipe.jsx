import { useRef } from "react";
import useInput from "../hooks/formInput";
import classes from "./AddRecipe.module.css";
import Section from "./UI/Section";

const AddRecipe = (props) => {
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredIngredients,
    isValid: ingredientsIsValid,
    hasError: ingredientsHasError,
    valueChangeHandler: ingredientsChangeHandler,
    inputBlurHandler: ingredientsBlurHandler,
    reset: resetIngredientsInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredInstructions,
    isValid: instructionsIsValid,
    hasError: instructionsHasError,
    valueChangeHandler: instructionsChangeHandler,
    inputBlurHandler: instructionsBlurHandler,
    reset: resetInstructionsInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (titleIsValid && ingredientsIsValid && instructionsIsValid) {
    formIsValid = true;
  }

  const titleClasses = `${classes.control} ${
    titleHasError ? classes.invalid : ""
  }`;

  const ingredientsClasses = `${classes.control} ${
    ingredientsHasError ? classes.invalid : ""
  }`;

  const instructionsClasses = `${classes.control} ${
    instructionsHasError ? classes.invalid : ""
  }`;

  const titleRef = useRef("");
  const ingredientsRef = useRef("");
  const instructionsRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const recipe = {
      title: enteredTitle,
      ingredients: enteredIngredients,
      instructions: enteredInstructions,
    };

    props.onAddRecipe(recipe);

    // Clear the form fields
    resetTitleInput();
    resetIngredientsInput();
    resetInstructionsInput();
  };

  return (
    <Section>
      <div>
        <h3>
          Be sure to format your ingredients and instructions in long strings:
        </h3>
        <p>For Ingredients: ingredient 1, ingredient 2, ingredient 3...</p>
        <p>For Instructions: 1) first step. 2) second step. 3) third step.</p>
      </div>
      <form onSubmit={submitHandler}>
        <div className={titleClasses}>
          <label htmlFor="title">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
          {titleHasError && (
            <p className={classes.errorText}>Please enter a valid title.</p>
          )}
        </div>
        <div className={ingredientsClasses}>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            rows="5"
            id="ingredients"
            value={enteredIngredients}
            onChange={ingredientsChangeHandler}
            onBlur={ingredientsBlurHandler}
          />
          {ingredientsHasError && (
            <p className={classes.errorText}>Please enter valid ingredients.</p>
          )}
        </div>
        <div className={instructionsClasses}>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            rows="5"
            id="instructions"
            value={enteredInstructions}
            onChange={instructionsChangeHandler}
            onBlur={instructionsBlurHandler}
          />
          {instructionsHasError && (
            <p className={classes.errorText}>
              Please enter valid instructions.
            </p>
          )}
        </div>
        <button disabled={!formIsValid}>Add Recipe</button>
      </form>
    </Section>
  );
};

export default AddRecipe;

