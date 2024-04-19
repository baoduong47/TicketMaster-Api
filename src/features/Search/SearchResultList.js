import EventCard from "../EventCard/EventCard";
const SearchResultList = ({
  events,
  pages,
  toggleFavorites,
  favorites,
  query,
}) => {
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
      {pages.size > 0 && <div className=" row top-search">{query}</div>}

      {pages.size > 0 && (
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginBottom: 0 }}
        >
          <p style={{ marginTop: "20px" }}>
            <b>Results</b>
          </p>
          <p className="pagination-info">
            Loaded <b>{pages.size}</b> out of <b>{pages.totalElements}</b> items
          </p>
        </div>
      )}

      {events.map((event) => (
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
