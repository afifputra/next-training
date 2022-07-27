import EventItem from "./event-item";

const EventList = (props) => {
  const { events } = props;
  return (
    <ul>
      {events.map((event) => {
        <EventItem key={event.id} title={event.title} image={event.image} date={event.date} location={event.location} id={event.id} />;
      })}
    </ul>
  );
};

export default EventList;
