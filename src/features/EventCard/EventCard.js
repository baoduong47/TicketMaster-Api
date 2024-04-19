import Heart from "../Heart/Heart";

const EventCard = ({ event, formatDate, toggleFavorites, favorites }) => {
  const imageSize = { width: "300px", height: "160px" }; // Define the size for the images

  return (
    <div className="row event-card">
      <div className="col-md-2 d-flex align-items-center justify-content-center">
        {event.images && event.images.length > 0 && (
          <img
            src={event.images[0]?.url}
            alt={event.name}
            style={imageSize} // Apply the defined size to the image
            className="img-fluid"
          />
        )}
      </div>
      <div className="col-md-9">
        <h2>{event.name}</h2>
        {event._embedded &&
          event._embedded.venues &&
          event._embedded.venues.length > 0 && (
            <h5>Location: {event._embedded.venues[0].name}</h5>
          )}
        <h5>Date: {formatDate(event.dates.start.localDate)}</h5>
        {event.classifications && event.classifications.length > 0 && (
          <h6>Genre: {event.classifications[0].genre.name}</h6>
        )}
        {/* Pass the necessary props to the Heart component */}
        <Heart
          event={event}
          toggleFavorites={toggleFavorites}
          favorites={favorites}
        />
      </div>
      <div className="col-md-1 d-flex align-items-center justify-content-center">
        <button type="button" className="btn btn-outline-primary btn-block">
          Find Ticket
        </button>
      </div>
    </div>
  );
};

export default EventCard;
