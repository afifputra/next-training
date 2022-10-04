import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
import Button from "../../components/ui/button";

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  const selectedEvent = getEventById(eventId);

  if (!selectedEvent) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    );
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
