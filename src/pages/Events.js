import { useEffect, useState } from "react";
import EventsList from "../components/EventsList";

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("events");
      const { events } = await response.json();
      setEvents(events);
    })();
  }, []);
  return (
    <>
      <div>
        {events.length ? (
          <ul>
            {events.map((event) => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default EventsPage;
