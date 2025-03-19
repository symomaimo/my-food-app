import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate(`/recipe/${recipe.idMeal}`, { state: { recipe } }); // Pass data via state
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-amber-600 text-center">{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-60 object-cover rounded-lg shadow-md mt-2"
      />
      <p className="text-md mt-3">
        <strong className="text-red-400">Category:</strong> {recipe.strCategory} |{" "}
        <strong className="text-amber-700">Origin:</strong> {recipe.strArea}
      </p>

      {/* Navigate to Details Page */}
      <button
        className="mt-4 text-blue-500 underline focus:outline-none"
        onClick={handleShowMore}
      >
        Show More
      </button>
    </div>
  );
};

export default RecipeCard;
