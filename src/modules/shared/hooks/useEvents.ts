import { useState, useEffect } from "react";
import { getEvents } from "../services/eventsServices";
import { Event } from "../types/APIObjectsTypes";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
    };

    fetchEvents();
  }, []);

  return events;
};
