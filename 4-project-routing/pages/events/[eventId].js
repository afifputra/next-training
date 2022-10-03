import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  const selectedEvent = getEventById(eventId);

  if (!selectedEvent) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics date={selectedEvent.date} address={selectedEvent.location} image={selectedEvent.image} imageAlt={selectedEvent.title} />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
