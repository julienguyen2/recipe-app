import { useState, useEffect, useCallback } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Layout/MealsSummary";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://recipe-app-c47cd-default-rtdb.firebaseio.com/recipes.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedRecipes = [];

      for (const key in data) {
        loadedRecipes.push({
          id: key,
          title: data[key].title,
          ingredients: data[key].ingredients,
          instructions: data[key].instructions,
        });
      }
      setRecipes(loadedRecipes);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchRecipesHandler();
  }, [fetchRecipesHandler]);

  const addRecipeHandler = async (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);

    try {
      const response = await fetch(
        "https://recipe-app-c47cd-default-rtdb.firebaseio.com/recipes.json",
        {
          method: "POST",
          body: JSON.stringify(recipe),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <MealsSummary />
      <section>
        <AddRecipe onAddRecipe={addRecipeHandler} />
      </section>
      <section>
        {!isLoading && recipes.length > 0 && <RecipeList recipes={recipes} />}
        {!isLoading && recipes.length === 0 && !error && (
          <p>Found no recipes.</p>
        )}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </>
  );
}

export default App;
