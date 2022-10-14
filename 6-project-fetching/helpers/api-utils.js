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

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  const event = allEvents.find((event) => event.id === id);

  return event;
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
