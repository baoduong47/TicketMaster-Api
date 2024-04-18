// FavoritesList.js
import React from "react";
import EventCard from "../EventCard/EventCard";

const FavoritesList = ({ favorites, toggleFavorites }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate() + 1;
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  // // Sort events by start date
  // favorites.sort((a, b) => {
  //   const dateA = new Date(a.dates.start.localDate);
  //   const dateB = new Date(b.dates.start.localDate);
  //   return dateA - dateB;
  // });

  return (
    <div className="row">
      <h2>Favorites List</h2>
      {favorites.map((favorite) => {
        console.log(favorites);
        return (
          <EventCard
            key={favorite.id}
            event={favorite}
            formatDate={formatDate}
            toggleFavorites={toggleFavorites} // Pass toggleFavorites function
          />
        );
      })}
    </div>
  );
};

export default FavoritesList;
