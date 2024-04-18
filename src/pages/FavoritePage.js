import React from "react";
import FavoritesList from "../features/Favorites/FavoritesList";

const FavoritesPage = ({ favorites, toggleFavorites }) => {
  return (
    <div>
      <FavoritesList favorites={favorites} toggleFavorites={toggleFavorites} />
    </div>
  );
};

export default FavoritesPage;
