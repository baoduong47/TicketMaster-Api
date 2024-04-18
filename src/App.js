import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import FavoritesPage from "./pages/FavoritePage";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]); // New state for favorites list
  
  const toggleFavorites = (event) => {
    console.log(event);
    const { id, name, dates, classifications, images, _embedded } = event; // Destructure necessary information
    const eventData = {
      id,
      name,
      dates,
      classifications,
      images,
      _embedded,
    };

    const isFavorite = favorites.some(
      (favEvent) => favEvent.id === eventData.id
    );
    if (isFavorite) {
      setFavorites(
        favorites.filter((favEvent) => favEvent.id !== eventData.id)
      );
    } else {
      setFavorites([...favorites, eventData]);
    }
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage toggleFavorites={toggleFavorites} favorites={favorites} />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              toggleFavorites={toggleFavorites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
