import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <nav>
      <div>
        <h1>Pokedex!</h1>
      </div>
      <div>Pokemons Adicionados {favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;
