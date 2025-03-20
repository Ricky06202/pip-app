import axios from "axios";
import { Person } from "../types/APIObjectsTypes";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getPersons = async () => {
  const response = await api.get<Person[]>("persons");
  return response.data;
};

export const getPerson = async (id: number) => {
  const response = await api.get<Person>(`persons/${id}`);
  return response.data;
};
