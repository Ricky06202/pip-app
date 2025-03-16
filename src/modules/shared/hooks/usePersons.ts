import { useState, useEffect } from "react";
import axios from "axios";
import { Person, Role } from "../types/APIObjectsTypes";

export const usePersons = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const response = await axios.get("/api/persons");
      const sortedPersons = [...response.data].sort(
        (a, b) => (a.role as Role).id! - (b.role as Role).id!
      );
      setPersons(sortedPersons);
    };

    fetchPersons();
  }, []);

  return persons;
};
