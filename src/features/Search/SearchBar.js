import React from "react";
import SearchResultList from "./SearchResultList";

const SearchBar = ({
  handleChange,
  events,
  query,
  pages,
  handleSubmit,
  toggleFavorites,
  favorites,
}) => {
  return (
    <div className="row">
      <div className="col-lg 6">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search an event..."
            className="form-control form-control-lg"
          />
          <button
            className="btn btn-outline-primary btn-lg btn-block"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <SearchResultList
        events={events}
        pages={pages}
        toggleFavorites={toggleFavorites}
        favorites={favorites}
      />

      {/* <FavoritesList favorites={favorites} /> */}
    </div>
  );
};
export default SearchBar;
