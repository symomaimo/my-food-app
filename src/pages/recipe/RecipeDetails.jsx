import { useLocation, useParams, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return <p className="text-center text-red-500">Recipe not found!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <button className="mb-4 text-blue-500 underline" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
      <h2 className="text-3xl font-bold text-amber-600 text-center py-10">{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-80 object-cover rounded-lg shadow-md mt-2"
      />
      <p className="text-md mt-3">
        <strong className="text-red-400">Category:</strong> {recipe.strCategory} |{" "}
        <strong className="text-amber-700">Origin:</strong> {recipe.strArea}
      </p>
      
      <h3 className="text-lg font-bold text-green-500 mt-4 ">Ingredients:</h3>
      <ul className="text-sm mt-2">
        {Array.from({ length: 20 }, (_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ingredient ? (
            <li key={i}>
              {measure} {ingredient}
            </li>
          ) : null;
        })}
      </ul>

      <h3 className="text-lg font-bold mt-4 text-green-500">Instructions:</h3>
      <p className="text-sm mt-2">{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
