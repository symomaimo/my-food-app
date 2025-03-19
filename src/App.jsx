import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Layout from "./components /layout/Layout";
import RecipeDetail from "./pages/recipe/RecipeDetails";
import Recipe from "./pages/recipe/Recipe";

function App() {
  return (
    <>
      <div className="bg-black">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/recipes" element={<Recipe/>} />
            <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Fixed Route */}
          </Route>
        </Routes>
        
      </div>
    </>
  );
}

export default App;
