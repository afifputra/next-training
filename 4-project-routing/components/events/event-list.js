import EventItem from "./event-item";
import classes from "../../styles/events/event-list.module.css";

const EventList = (props) => {
  const { events } = props;

  return (
    <ul className={classes.list}>
      {events.map((event) => {
        return <EventItem key={event.id} title={event.title} image={event.image} date={event.date} location={event.location} id={event.id} />;
      })}
    </ul>
  );
};

export default EventList;
