import { useRouter } from "next/router";

const FilteredEventsPage = () => {
  const router = useRouter();
  const { query } = router;
  const { slug } = query;

  console.log(slug);

  return (
    <div>
      <h1>Events</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, quisquam.</p>
      <p>Filter: </p>
      <ul>
        {/* {slug.map((item) => {
          return <li>{item}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default FilteredEventsPage;
