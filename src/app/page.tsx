"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("/api/roles").then((res) => {
      setRoles(res.data);
    });
  }, []);

  return (
    <ul>
      {roles.map((role: any) => (
        <li key={role.id}>{role.role}</li>
      ))}
    </ul>
  );
}
