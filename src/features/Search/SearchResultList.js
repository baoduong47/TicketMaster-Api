import EventCard from "../EventCard/EventCard";

const SearchResultList = ({ events, pages, toggleFavorites, favorites }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate() + 1;
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  // Sort events by start date
  events.sort((a, b) => {
    const dateA = new Date(a.dates.start.localDate);
    const dateB = new Date(b.dates.start.localDate);
    return dateA - dateB;
  });

  return (
    <div className="container">
      {pages.size > 0 ? (
        <p className="pagination-info">
          Loaded {pages.size} out of {pages.totalElements} items
        </p>
      ) : null}
      <h1>Search List</h1>
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            event={event}
            formatDate={formatDate}
            toggleFavorites={toggleFavorites}
            favorites={favorites}
          />
        );
      })}
    </div>
  );
};

export default SearchResultList;
