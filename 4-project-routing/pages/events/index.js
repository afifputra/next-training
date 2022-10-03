import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";

import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
};

export default EventsPage;
