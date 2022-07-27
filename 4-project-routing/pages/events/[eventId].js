import { useRouter } from "next/router";

const EventDetailPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  return (
    <div>
      <h1>Event {eventId}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quisquam.</p>
    </div>
  );
};

export default EventDetailPage;
