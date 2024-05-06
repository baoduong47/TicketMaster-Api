import React, { useState, useEffect } from "react";
import EventCard from "../EventCard/EventCard";

const SearchResultList = ({ events, pages, toggleFavorites, favorites }) => {
  const [selectedGenre, setSelectedGenre] = useState(""); // State to store selected genre

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate() + 1;
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  console.log("All Events:", events); // Log events to check

  // Sort events by start date
  events.sort((a, b) => {
    const dateA = new Date(a.dates.start.localDate);
    const dateB = new Date(b.dates.start.localDate);
    return dateA - dateB;
  });

  // Filter events based on selected genre
  const filteredEvents = selectedGenre
    ? events.filter((event) => event.genre === selectedGenre)
    : events;

  return (
    <div className="container">
      {filteredEvents.length > 0 && (
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginBottom: 0 }}
        >
          <p style={{ marginTop: "20px" }}>
            <b>Results</b>
          </p>
          <p className="pagination-info">
            Loaded <b>{filteredEvents.length}</b> out of{" "}
            <b>{pages.totalElements}</b> items
          </p>
        </div>
      )}

      {filteredEvents.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          formatDate={formatDate}
          toggleFavorites={toggleFavorites}
          favorites={favorites}
        />
      ))}
    </div>
  );
};

export default SearchResultList;
