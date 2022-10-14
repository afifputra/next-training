const API_URL = "https://nextjs-course-92950-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function getAllEvents() {
  const response = await fetch(`${API_URL}/events.json`);
  const data = await response.json();

  return data;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter((event) => event.isFeatured);

  return featuredEvents;
}
