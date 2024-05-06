import React from "react";
import SearchResultList from "../Search/SearchResultList";

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
    <div className="container" style={{ marginTop: "3em" }}>
      <div className="row justify-content-center">
        <div className="col-lg-6" style={{ marginBottom: "3em" }}>
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              id="form1"
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Search an event..."
              className="form-control me-2"
            />
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "black", border: "black" }}
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <SearchResultList
        events={events}
        pages={pages}
        toggleFavorites={toggleFavorites}
        favorites={favorites}
        query={query}
      />
    </div>
  );
};

export default SearchBar;
