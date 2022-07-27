import Link from "next/link";

const EventItem = (props) => {
  console.log(props);
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("id-ID", {
    day: "string",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replasce(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <image src={`/${image}`} alt={title} />
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <time>{humanReadableDate}</time>
      </div>
      <div>
        <address>{formattedAddress}</address>
      </div>
      <div>
        <Link href={exploreLink}>Explore More Event</Link>
      </div>
    </li>
  );
};

export default EventItem;
