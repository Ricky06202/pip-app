import axios from "axios";
import { Event } from "../types/APIObjectsTypes";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getEvents = async () => {
  const response = await api.get<Event[]>("events");
  return response.data;
};
