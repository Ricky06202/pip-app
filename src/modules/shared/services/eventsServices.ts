import axios from "axios";
import { Event } from "../types/APIObjectsTypes";

export const getEvents = async () => {
  const response = await axios.get<Event[]>("/api/events");
  return response.data;
};
