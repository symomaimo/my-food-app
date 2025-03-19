import React from "react";
import Header from "../../components /header/Header";
import Recipe from "../recipe/Recipe";

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p >
            Taste the world with
            <br />
            falanceselect
          </p>
        }
        type='home'
      /> 
      <section id="recipes" className="md:max-w[1440px] mx-auto px-4 md:px-20">
        <div>
         <Recipe/>
         </div>
      </section>
    </main>
  );
};

export default Home;
