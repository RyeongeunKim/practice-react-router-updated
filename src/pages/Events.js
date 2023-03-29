import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("/events");

  if (!response.ok) return;

  const { events } = await response.json();

  return events;
}
