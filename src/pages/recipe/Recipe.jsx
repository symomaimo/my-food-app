import React, { useEffect, useState } from "react";
// import { BsSearchAlt2 } from "react-icons/bs";
import axios from "axios";
import Loading from "../../components /loading/Loading";
import SearchBar from "../../components /search/SearchBar";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from "../../components /card/RecipeCard";


const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php";
const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) return; // Avoid empty searches
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}?s=${query}`);
        setRecipes(response.data.meals ? response.data.meals : []);
      } catch (error) {
        console.error("Error fetching recipes", error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full py-10">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4">
          <SearchBar
            placeholder="e.g., cake, vegan, chicken"
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 className="text-gray-550 " />}
          />
        </form>
      </div>

      {/* Recipe Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
        {recipes.length > 0 ? (
          recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
        ) : (
          !loading && <p className="text-center text-gray-600 py-10">No Recipe Found</p>
        )}
      </div>
    </div>
  );
};

export default Recipe;
