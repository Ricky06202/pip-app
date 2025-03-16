import axios from "axios";
import { Person } from "../types/APIObjectsTypes";

export const getPersons = async () => {
  const response = await axios.get<Person[]>("/api/persons");
  return response.data;
};
