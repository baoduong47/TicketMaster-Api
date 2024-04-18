import React from "react";
import SearchBar from "../features/Search/SearchBar";
import { useState } from "react";

const HomePage = ({ toggleFavorites, favorites }) => {
  const [query, setQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [pages, setPages] = useState(0);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=${query}&size=10`
      );

      const data = await response.json();
      // console.log(data);
      // // console.log(data._embedded);
      // console.log(data.page);

      if (data) {
        setEvents(data._embedded.events);
        setPages(data.page);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <SearchBar
        events={events}
        query={query}
        pages={pages}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        toggleFavorites={toggleFavorites}
        favorites={favorites}
      />
    </div>
  );
};

export default HomePage;
