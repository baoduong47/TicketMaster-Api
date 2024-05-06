import React, { useState } from "react";
import SearchBar from "../features/Search/SearchBar";

const HomePage = ({ toggleFavorites, favorites }) => {
  const [query, setQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [pages, setPages] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // State to handle error message

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

      const data = await response.json(); //convert string to js object

      if (data && data._embedded && data._embedded.events.length > 0) {
        // If events are found, set events and reset error message
        setEvents(data._embedded.events);
        setPages(data.page);
        setErrorMessage("");
      } else {
        // If no events are found, set error message
        setErrorMessage("No Events Found.");
        setEvents([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("No Events Found.");
    }
  };

  return (
    <div>
      {errorMessage ? (
        <>
          <SearchBar
            events={events}
            query={query}
            pages={pages}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            toggleFavorites={toggleFavorites}
            favorites={favorites}
          />
          <p style={{ fontWeight: "bold" }}>{errorMessage}</p>
        </>
      ) : (
        <SearchBar
          events={events}
          query={query}
          pages={pages}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleFavorites={toggleFavorites}
          favorites={favorites}
        />
      )}
    </div>
  );
};

export default HomePage;
